/** @format */

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation } from "react-router";

import GlobalContext from "./GlobalContext";

const Mainlayout = () => {
  // makse the page scroll to the top on page load
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = Cookies.get("token");
  const profile = [{}];

  useEffect(() => {
    axios.get(apiUrl + "/products/all-products")
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 401) {
          Cookies.removeAll();
          window.location.href = '/login';
        }
      });
  }, []);


  const Categories = [
    { name: "All", image: "/images/logo.png" },
    { name: "Fashion", image: "/images/fashion.png" },
    { name: "Electronics", image: "/images/electronics.png" },
    { name: "Phones", image: "/images/phones.png" },
    { name: "Computers", image: "/images/computers.png" },
    { name: "Books", image: "/images/books.png" },
    { name: "Food", image: "/images/foods.png" },
    {
      name: "Kitchen",
      image: "/images/kitchen-appliance.png"
    },
    { name: "Beauty", image: "/images/beauty.png" },
    { name: "Gaming", image: "/images/gaming.png" }
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // check if user is loggedin
  // if user is logged in, get user profile

  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    // Check if the user is logged in

    if (token) {
      console.log(token);
      // If the user is logged in, get the user's profile
      setUserProfile({
        token: Cookies.get("token"),
        fullname: Cookies.get("full_name"),
        first_name: Cookies.get("first_name"),
        last_name: Cookies.get("last_name"),
        email: Cookies.get("email"),
        phone: Cookies.get("phone"),
        role: Cookies.get("role"),
        id: Cookies.get("id"),
        is_activated: Cookies.get("is_activated"),
        is_verified: Cookies.get("is_verified"),
        is_student: Cookies.get("is_student"),
        profile_image: Cookies.get("profile_image"),
        address: Cookies.get("address"),
        country: Cookies.get("country"),
        state: Cookies.get("state"),
        gender: Cookies.get("gender")
      });
      // axios
      //   .get(apiUrl + "/get-single-user", {
      //     headers: {
      //       Authorization: `Bearer ${token}`
      //     }
      //   })
      //   .then((response) => {
      //     setUserProfile(response.data.data);
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching user profile:", error);
      //   });
    }
  }, []);

  console.log(userProfile);
  return (
    <GlobalContext.Provider
      value={{
        userProfile,
        token,
        searchQuery,
        products,
        profile,
        Categories,
        setSearchQuery
      }}
    >
      <div>
        <div>
          <Nav />
        </div>

        <Outlet />
        <div>
          <Footer />
        </div>
      </div>
    </GlobalContext.Provider>
  );
};

export default Mainlayout;
