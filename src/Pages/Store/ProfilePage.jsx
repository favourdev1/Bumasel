/** @format */

import React, { useState, useContext } from "react";

// import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
// import LoadingView from "./LoadingViews"
import ProfileSection from "./ProfileSection";

export default function ProfilePage() {
	
	// const { userProfile } = useContext(GlobalContext);
  const userProfile1 = {
    name: "John Doe",
    email: "email@gmail.com",
}
  return (
    // userProfile ? <ProfileSection userProfile={userProfile} /> : <LoadingView />
    <ProfileSection userProfile={userProfile1} />
  );




}



