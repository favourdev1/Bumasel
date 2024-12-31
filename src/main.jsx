/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route
} from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/Auth/Login/LoginPage";
import Signup from "./components/Auth/Signup/Signup";
import MainLayout from "./components/AppComponents/Layout/Mainlayout";
import ProfileLayout from "./components/AppComponents/Layout/ProfileLayout";
import SellersPage from "./Pages/Vendors/store/Sellerspage";
import ProductPage from "./Pages/Products/ProductPage";
import SearchPage from "./Pages/Search/SearchPage";
import ProfilePage from "./Pages/Store/ProfilePage";
import CreateStorePage from "./Pages/Vendors/Onboarding/components/StoreInfo";
import Dashboard from "./components/AppComponents/Layout/DashboardLayout/Dashboard";
import VendorDashboard from "./Pages/Vendors/Dashboard";
import Store from "./Pages/Vendors/store/Store";
import SubscriptionTable from "./Pages/Vendors/Subscription/SubscriptionTable";
import GetStarted from "./Pages/Vendors/Onboarding/GetStarted";
import Terms from "./Pages/OfficialPages/Terms";
import PrivacyPolicy from "./Pages/OfficialPages/PrivacyPolicy";
import AboutUs from "./Pages/OfficialPages/AboutUs";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/product/:id" element={<ProductPage />} />
				<Route path="/search/:search?" element={<SearchPage />} />
				<Route path="/dashboard" element={<Dashboard />}>
					<Route path="vendor" element={<VendorDashboard />} />
					<Route path="store" element={<Store />} />
					<Route path="store/create" element={<CreateStorePage />} />
					<Route path="store/sellers" element={<SellersPage />} />
					<Route path="subscription" element={<SubscriptionTable />} />
				</Route>
				<Route path="/vendor/Onboarding" element={<GetStarted />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacypolicy" element={<PrivacyPolicy />} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="*" element={<div>404 Not Found</div>} />
			</Route>
			<Route path="/profile" element={<ProfileLayout />}>
				<Route index element={<ProfilePage />} />
			</Route>
		</Route>
	)
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
