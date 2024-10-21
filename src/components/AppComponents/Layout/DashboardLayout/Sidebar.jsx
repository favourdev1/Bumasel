/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import ShopImageProp from "../../../Props/ShopImageProp";
import MessageImageProp from "../../../Props/MessageImageProp";
import SubscriptionImageProp from "../../../Props/SubscriptionImageProp";

const Sidebar = () => {
	const navigate = useNavigate();

	const handleNavigation = (route) => {
		navigate(route);
	};
	const location = useLocation();
	const currentRoute = location.pathname;

	// const userSidebarItems = [
	// 	{
	// 		id: 1,
	// 		title: "Dashboard",
	// 		icon: <RxDashboard />, // Replace with actual icon component or class
	// 		route: "/dashboard"
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Stores Products",
	// 		icon: <ShopImageProp className=" size-5" />, // Replace with actual icon component or class
	// 		route: "/profile"
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Reviews",
	// 		icon: <MessageImageProp className=" size-5" />, // Replace with actual icon component or class
	// 		route: "/messages"
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Settings2",
	// 		icon: <SubscriptionImageProp className=" size-5" />, // Replace with actual icon component or class
	// 		route: "/settings"
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Logout",
	// 		icon: "logout-icon", // Replace with actual icon component or class
	// 		route: "/logout"
	// 	}
	// ];

	return (
		<div className="bg-white border-r w-2/12  px-4 h-screen">
			<div className="w-full border-b py-2 flex flex-col">
				<div onClick={() => handleNavigation("/")} className="cursor-pointer">
					<img
						src="/images/logo.png"
						alt="logo"
						className="w-24 min-h-10 my-auto"
					/>
				</div>
			</div>

			<div className="py-4 flex flex-col gap-y-2 h-[94vh]">
				<div
					className={`flex items-center gap-4 py-2 ${
						currentRoute.includes("/dashboard/vendor")
							? "bg-purple-700 text-white"
							: ""
					} hover:bg-purple-100 hover:ring-1 hover:ring-purple-200 duration-700 transition-all  hover:text-purple-700 rounded-lg px-4 cursor-pointer text-gray-700`}
					onClick={() => handleNavigation("/dashboard/vendor")}
				>
					<RxDashboard
						className={
							currentRoute.includes("/dashboard/vendor") ? "active" : ""
						}
					/>
					<p className="text-sm font-semibold">Dashboard</p>
				</div>
				<div
					className={`flex items-center gap-4 py-2 ${
						currentRoute.includes("/dashboard/store")
							? "bg-purple-700 text-white"
							: ""
					} hover:bg-purple-100 hover:ring-1 hover:ring-purple-200 duration-700 transition-all  hover:text-purple-700 rounded-lg px-4 cursor-pointer text-gray-700`}
					onClick={() => handleNavigation("/dashboard/store")}
				>
					<ShopImageProp
						className={`size-5 ${
							currentRoute.includes("/dashboard/store") ? "active" : ""
						}`}
					/>
					<p className="text-sm font-semibold">Stores Products</p>
				</div>
				<div
					className={`flex items-center gap-4 py-2 ${
						currentRoute.includes("/messages") ? "bg-purple-700 text-white" : ""
					} hover:bg-purple-100 hover:ring-1 hover:ring-purple-200 duration-700 transition-all  hover:text-purple-700 rounded-lg px-4 cursor-pointer text-gray-700`}
					onClick={() => handleNavigation("/messages")}
				>
					<MessageImageProp
						className={`size-5 ${
							currentRoute.includes("/messages") ? "active" : ""
						}`}
					/>
					<p className="text-sm font-semibold">Reviews</p>
				</div>
				<div
					className={`flex items-center gap-4 py-2 ${
						currentRoute.includes("/subscription") ? "bg-purple-700 text-white" : ""
					} hover:bg-purple-100 hover:ring-1 hover:ring-purple-200 duration-700 transition-all  hover:text-purple-700 rounded-lg px-4 cursor-pointer text-gray-700`}
					onClick={() => handleNavigation("/dashboard/subscription")}
				>
					<SubscriptionImageProp
						className={`size-5 icon-placeholder ${
							currentRoute.includes("subscription") ? "active" : ""
						}`}
					/>
					<p className="text-sm font-semibold">Subscriptions</p>
				</div>
				<div
					className={`flex items-center gap-4 py-2 mt-auto ${
						currentRoute.includes("/logout") ? "bg-purple-700 text-white" : ""
					} hover:bg-purple-100 hover:ring-1 hover:ring-purple-200 duration-700 transition-all  hover:text-purple-700 rounded-lg px-4 cursor-pointer text-gray-700`}
					onClick={() => handleNavigation("/logout")}
				>
					<div
						className={`logout-icon ${
							currentRoute.includes("/logout") ? "active" : ""
						}`}
					></div>
					<p className="text-sm font-semibold">Logout</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
