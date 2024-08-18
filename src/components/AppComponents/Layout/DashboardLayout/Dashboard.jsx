/** @format */

import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
	return (
			<div className="w-full h-screen overflow-hidden flex items-center transition-all duration-500">
			<Sidebar />
			<div className="flex-1 h-screen bg-gray-100 flex flex-col">
				{/* topbar */}
				<div className="bg-white h-16 flex items-center px-4 justify-between  w-full z-10">
					<div className="flex items-center gap-4">
						<p className="font-bold">Dashboard</p>
					</div>
					<div className="flex items-center gap-4 text-sm text-gray-600">
						<div className="flex flex-col">
							<p>Chima David</p>
							<p className="text-xs text-purple-700 ml-auto font-bold">Vendor</p>
						</div>
						<img
							src="/images/profilehead.png"
							alt="profile"
							className="w-8 h-8 rounded-full"
						/>
					</div>
				</div>
				{/* Dashboard Content */}
				<div className="flex-1 overflow-auto ">
					<div className=" flex items-center justify-center">
						<div className="w-full h-full flex justify-center items-center bg-gray-50 border border-[#eee]  flex-col px-10 pt-16 text-sm overflow-y-auto max-h-[calc(100vh-4rem)]">
							
							<Outlet />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
