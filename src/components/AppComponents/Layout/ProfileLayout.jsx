import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import ProfileContext from "./ProfileContext";
import GlobalContext from "./GlobalContext";

const ProfileLayout = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const userId = Cookies.get("id");
  const token = Cookies.get("token");
  const [userProfile, setUserProfile] = useState({});
  
  // Profile-specific state
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      axios
        .get(apiUrl + "/user/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          setUserProfile(res.data.data);
          setLoading(false);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Cookies.remove('token');
            Cookies.remove('id');
            window.location.href = "/login";
          }
          setLoading(false);
        });
    }
  }, [token, userId, apiUrl]);

  // Profile context value
  const profileContextValue = {
    profileData,
    setProfileData,
    isEditing,
    setIsEditing,
    loading,
    userProfile
  };

  return (
    <GlobalContext.Provider
      value={{
        userProfile,
        token
      }}
    >
      <ProfileContext.Provider value={profileContextValue}>
        <div>
          <Nav />
          <Outlet />
          <Footer />
        </div>
      </ProfileContext.Provider>
    </GlobalContext.Provider>
  );
};

export default ProfileLayout;
