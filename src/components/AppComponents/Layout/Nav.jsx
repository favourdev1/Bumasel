/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../SearchIcon.jsx";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";
import Switch from "react-switch";
import { IoHelpCircleOutline } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import ProfilePopup from "./ProfilePopup";
import { useContext } from "react";

import GlobalContext from "./GlobalContext";
import { TbSmartHome } from "react-icons/tb";
import { FiStar } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
export default function Nav() {
	const [checked, setChecked] = useState(false);
	const { token, userProfile } = useContext(GlobalContext);

	const handleChange = (checked) => {
		setChecked(checked);
	};

	// list of categories
	const categories = [
		"Fashion",
		"Electronics",
		"Phones",
		"Computers",
		"Books",
		"Food",
		"Kitchen Appliances",
		"Beauty",
		"Others"
	];

	// *******************************************
	// Adds a border to the navbar when scrolled
	// *******************************************
	const [scrolled, setScrolled] = useState(false);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	let navbarClasses = ["navbar"];
	if (scrolled) {
		navbarClasses.push("border-b");
	}

	const navigate = useNavigate();

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			navigate(`/search?query=${searchQuery}`);
		}
	};

	// *******************************************
	// *******************************************

	const { searchQuery, setSearchQuery } = useContext(GlobalContext);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div className="relative ">
			<nav
				className={`${navbarClasses.join(
					" "
				)} py-4 px-6 md:px-0 fixed top-0 z-[9999999] w-full bg-white/50 backdrop-blur-lg`}
			>
				<div className="max-w-7xl mx-auto px-4">
					<div className="flex justify-between items-center w-full">
						<div className="flex-shrink-0">
							<Link to="/" className="text-lg font-bold">
								<img src="/images/logo.png" className="w-24" alt="App Logo" />
							</Link>
						</div>
						<div className="ml-4 flex-1  items-center md:ml-6 hidden md:flex">
							<div className="relative w-full">
								<input
									type="text"
									value={searchQuery}
									onKeyDown={handleKeyDown}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="bg-[#FAF7FF] w-full rounded-3xl text-gray-600 text-xs px-4 py-2.5 placeholder-gray-400 border border-stone-200 focus:outline-none focus:border-0 focus:ring-purple-700 focus:ring-2"
									placeholder="What Are You Looking To Buy?"
								/>
								<div className="absolute inset-y-0 right-0 flex items-center">
									<button
										type="submit"
										className="text-gray-300 focus:outline-none px-4 py-2 rounded-3xl"
									>
										<SearchIcon width={20} height={20} />
									</button>
								</div>
							</div>
						</div>
						<div className="md:hidden">
							<button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className="text-gray-600 focus:outline-none"
							>
								{isMobileMenuOpen ? (
									<IoMdClose width={24} height={24} />
								) : (
									<RiMenuFill width={24} height={24} />
								)}
							</button>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-center space-x-6">
								<button className="bg-purple-600 text-white flex items-center gap-2 rounded-xl px-4 py-2 text-xs hover:bg-purple-700 hover:text-white duration-500 transition-all">
									<img src="/images/shop.png" alt="Shop" />
									Sell
								</button>
								{token == null || token == "undefined" ? (
									<Link
										to="/login"
										className="text-purple-700 px-4 py-3 rounded-xl text-xs hover:underline duration-500 hover:text-purple-700 hover:font-bold hover:bg-purple-100"
									>
										Register/Login
									</Link>
								) : (
									<div onClick={() => setIsPopupOpen(true)}>
										<ProfilePopup
											isOpen={isPopupOpen}
											setIsOpen={setIsPopupOpen}
											userDetails={userProfile}
										/>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>


				{isMobileMenuOpen && (
					<div className="md:hidden bg-white/50 backdrop-blur-lg w-full py-4 px-6">
						<div className="flex flex-col space-y-4">
							<button className="bg-purple-600 text-white flex items-center gap-2 rounded-xl px-4 py-2 text-xs hover:bg-purple-700 hover:text-white duration-500 transition-all">
								<img src="/images/shop.png" alt="Shop" />
								Sell
							</button>
							{token !== null && token !== "undefined" ? (
								<Link
									to="/login"
									className="text-purple-700 px-4 py-3 rounded-xl text-xs hover:underline duration-500 hover:text-purple-700 hover:font-bold hover:bg-purple-100"
								>
									Register/Login
								</Link>
							) : (
								<div onClick={() => setIsPopupOpen(true)}>
									<ProfilePopup
										isOpen={isPopupOpen}
										setIsOpen={setIsPopupOpen}
										userDetails={userProfile}
									/>
								</div>
							)}
						</div>
					</div>
				)}
			</nav>


			<div className="relative w-full block md:hidden mt-20 px-5">
				<input
					type="text"
					value={searchQuery}
					onKeyDown={handleKeyDown}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="bg-[#FAF7FF] w-full rounded-3xl text-gray-600 text-xs px-4 py-2.5 placeholder-gray-400 border border-stone-200 focus:outline-none focus:border-0 focus:ring-purple-700 focus:ring-2"
					placeholder="What Are You Looking To Buy?"
				/>
				<div className="absolute inset-y-0 right-4 flex items-center">
					<button
						type="submit"
						className="text-gray-300 focus:outline-none px-4 py-2 rounded-3xl"
					>
						<SearchIcon width={20} height={20} />
					</button>
				</div>
			</div>


			<nav className=" py-2  mt-20 hidden lg:block items-center text-xs justify-start">
				<div className="max-w-7xl mx-auto px-4 ">
					<div className="flex gap-5 items-center w-full ">
						<Link
							className="rounded-xl hover:bg-purple-100 pr-3 py-2  flex items-center gap-4 duration-500 hover:px-3 hover:text-purple-700 hover:font-bold"
							to={"/"}
						>
							<img src="/images/HomeIcon.png" className="size-4" />
							Home
						</Link>
						<Link
							className="rounded-xl hover:bg-purple-100 px-3 py-2  flex items-center gap-4 duration-500 hover:text-purple-700 hover:font-bold"
							to={""}
						>
							<AiOutlineHeart className="size-5" />
							Saved
						</Link>

						<button
							color=""
							className=" flex gap-2  items-center rounded-xl hover:bg-purple-100 px-3 py-2 duration-500 hover:text-purple-700 hover:font-bold focus:border-0 focus:outline-none focus:ring-0"
						>
							<FiStar className="size-5" />
							Ratings
						</button>
						<button
							color=""
							className="flex gap-2 px-4 py-2 items-center rounded-xl hover:bg-purple-100 px-3 py-2 duration-500 hover:text-purple-700 hover:font-bold focus:border-0 focus:outline-none focus:ring-0"
						>
							<img
								src="/images/message-question.png"
								alt=""
								className="w-5 h-5"
							/>
							Need Help
						</button>

						<div className="flex items-center gap-3 mx-4">
							<span
								className={
									!checked ? "text-purple-700 font-bold duration-500" : ""
								}
							>
								Goods
							</span>
							<Switch
								onChange={handleChange}
								checked={checked}
								offColor="#eee"
								onColor="#eee"
								uncheckedIcon={false}
								checkedIcon={false}
								height={14}
								width={32}
								handleDiameter={18}
								offHandleColor="#8529CD"
								onHandleColor="#8529CD"
							/>
							<span
								className={
									checked ? "text-purple-700 font-bold duration-500" : ""
								}
							>
								{" "}
								Services
							</span>
						</div>
					</div>
				</div>
			</nav>
			<nav className="  justify-start  hidden lg:flex bg-purple-700 w-full">
				<div className="max-w-7xl mx-auto  w-full text-xs">
					<div className="flex gap-x-7 items-center w-full text-white ">
						<Link
							to={""}
							className="flex px-4 hover:bg-purple-600/50 duration-500 items-center gap-2 justify-center  py-4 text-center "
						>
							<LuMenu className="h-5 w-5" />
							Category
						</Link>

						{/* loop through the categories  */}
						{categories.map((category, index) => (
							<Link
								key={index}
								to={""}
								className=" px-4  hover:bg-purple-600/50 duration-500 h-full items-center justify-center py-4 text-center w-max whitespace-nowrap"
							>
								{category}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</div>
	);
}
