/** @format */
import React, { useContext } from "react";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import ProfileContext from "../../components/AppComponents/Layout/ProfileContext";
import ProfileSection from "./ProfileSection";
import LoadingView from "./LoadingViews";

export default function ProfilePage() {
  const { userProfile } = useContext(GlobalContext);
  const { loading } = useContext(ProfileContext);
  
  console.log(userProfile)
  return (
    loading ? <LoadingView /> : <ProfileSection userProfile={userProfile} />
  );
}
