/** @format */

import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useLocation } from "react-router";
import GlobalContext from "./GlobalContext";

const Mainlayout = () => {

	// makse the page scroll to the top on page load
	const location = useLocation();
	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [location]);


	const products = [
		{
			title: "Female Sports Wear",
			img: "/images/Well-builtWoman.png",
			img1: "/images/Well-builtWoman.png",
			img2: "/images/Well-builtWoman.png",
			img3: "/images/Well-builtWoman.png",
			img4: "/images/Well-builtWoman.png",
			price: "N30,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "TPS5 Gaming Dual Pad ",
			img: "/images/GameController.png",
			img1: "/images/GameController.png",
			img2: "/images/GameController.png",
			img3: "/images/GameController.png",
			img4: "/images/GameController.png",

			price: "N15,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Ijaw Traditional wear",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N8,500",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Male underwear",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N5,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Nike Airforce Jordan 1s",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N30,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Sony Gaming Headset",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N21,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		// 5 dummy products
		{
			title: "Product 1",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N10,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Product 2",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N12,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Product 3",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N8,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		},
		{
			title: "Product 4",
			img: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img1: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img2: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img3: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			img4: "https://i.etsystatic.com/25784045/r/il/285072/5709649035/il_794xN.5709649035_ejg3.jpg",
			price: "N15,000",
			brand: "Adidas",
			brandLogo: "/images/brandlogo.png",
			productId: "52615721827",
			productDescription: "Women padded sports bra",
			productRating: "4.5",
			storeLocation: "Abia State",
			storeName: "Doren & co",
			storeContact: "0909271726"
		}
	];

	const token = Cookies.get("token");
	const profile = [{}];

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

	const [userProfile, setUserProfile] = useState(null);
	const apiUrl = process.env.REACT_APP_API_URL;
	useEffect(() => {
		// Check if the user is logged in

		if (token) {
			console.log(token);
			// If the user is logged in, get the user's profile
			axios
				.get(apiUrl + "/get-single-user", {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then((response) => {
					setUserProfile(response.data.data);
					console.log(response.data);
				})
				.catch((error) => {
					console.error("Error fetching user profile:", error);
				});
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
