/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Auth/Login/LoginPage";
import Signup from "./components/Auth/Signup/Signup";
import Mainlayout from "./components/AppComponents/Layout/Mainlayout";
import Sellerspage from "./Pages/Vendors/store/Sellerspage";
import ProductPage from "./Pages/Products/ProductPage";
import SearchPage from "./Pages/Search/SearchPage";
import ProfilePage from "./Pages/Store/ProfilePage";
import CreateStorePage from "./Pages/Vendors/Onboarding/components/StoreInfo";
import Dashboard from "./components/AppComponents/Layout/DashboardLayout/Dashboard";
import VendorDashboard from "./Pages/Vendors/Dashboard";
import Store from "./Pages/Vendors/store/Store";
import SubscriptionTable from "./Pages/Vendors/Subscription/SubscriptionTable";
import GetStarted from "./Pages/Vendors/Onboarding/GetStarted";
// eslint-disable-next-line
import Terms from "./Pages/OfficialPages/Terms";
import PrivacyPolicy from "./Pages/OfficialPages/PrivacyPolicy";
import AboutUs from "./Pages/OfficialPages/AboutUs";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<Mainlayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/product/:id" element={<ProductPage />} />
					<Route path="/search/:search?" element={<SearchPage />} />
					<Route path="/profile" element={<ProfilePage />} />

					{/* your next path should come here  */}
				</Route>
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="vendor" element={<VendorDashboard />} />
					<Route path="store" element={<Store />} />
					<Route path="store/create" element={<CreateStorePage />} />
					<Route path="store/sellers" element={<Sellerspage />} />
					<Route path="subscription" element={<SubscriptionTable />} />
				</Route>

				<Route path="/vendor/Onboarding" element={<GetStarted />} />
				
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacypolicy" element={<PrivacyPolicy />} />
				<Route path = "/aboutUs" element = {<AboutUs />} />

				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
