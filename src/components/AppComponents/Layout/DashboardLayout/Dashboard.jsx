/** @format */

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router";

import DashboardContext from "./DashboardContext";
const Dashboard = () => {
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

	return (
		<DashboardContext.Provider
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
								<p className="text-xs text-purple-700 ml-auto font-bold">
									Vendor
								</p>
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
		</DashboardContext.Provider>
	);
};

export default Dashboard;
