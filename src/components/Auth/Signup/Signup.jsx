/** @format */
import React, { useEffect, useState } from "react";

// icons
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaTransgender } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { PiPasswordDuotone, PiTornadoBold } from "react-icons/pi";
// CSS imports
import "../Login/LoginPage";
import widths from "../animatedWidth";

import "../Login/LoginPage.css";
export default function Signup() {
	const [showPassword, setShowPassword] = useState(false);
	const [animatedWidth, setAnimatedWidth] = useState("w-full");

	useEffect(() => {
		const intervalId = setInterval(() => {
			// Generate a random index excluding the current index
			let randomIndex;
			do {
				randomIndex = Math.floor(Math.random() * widths.length);
			} while (randomIndex === widths.indexOf(animatedWidth));

			setAnimatedWidth(widths[randomIndex]);
		}, 2000);

		return () => clearInterval(intervalId);
	}, [animatedWidth, widths]);
	const showRegister = () => {
		window.location.href = "/login";
	};

	function handleSignupButtonClick(event) {
		if (event) {
			event.preventDefault();
		}
	}
	// Rest of your component code...

	useEffect(() => {
		// Save original overflow style
		const originalStyle = window.getComputedStyle(document.body).overflow;

		// Prevent scrolling on mount
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = originalStyle);
	}, []); // Empty array ensures effect is only run on mount and unmount

	return (
		<div className="h-screen m-0 bg-white flex items-center  px-3 ">
			<div className="hidden  lg:flex lg:w-2/5 relative overflow-hidden h-full  items-center">
				<div className="fixed h-[90vh] relative ">
					<img
						src="./images/login-girl.png"
						className="rounded-xl border-slate-100  max-h-[100vh]  w-full h-full"
						alt="Login Page"
					/>
					<div className="absolute bottom-5 w-full pl-10 py-10">
						<div class="backdrop-blur-xl bg-white/20 e w-3/4 rounded-lg p-4 text-white py-5">
							<p className="font-bold text-xl">
								The Best Ecommerce Platform You Can Ask For
							</p>
							<p className="text-base pr-5">
								we sell everything you need for your day to day activities
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full justify-center md:1/5 lg:w-3/5 xl:w-2/5 flex flex-col px-5 md:p-10   h-full overflow-y-scroll hide-scrollbar">
				<img src="./images/logo.png" className="w-24 mt-72" alt=" App Logo" />

				<div className="flex flex-col  md:my-auto ">
					<div className="pb-10">
						{/* back button  */}

						<div className="flex items-center gap-1  w-24">
							<div
								className={`rounded-full duration-500 bg-purple-700 h-1  ${animatedWidth}`}
							></div>
							<div className="rounded-full bg-slate-100 h-1 flex-1 "></div>
						</div>
					</div>
					<h2 className="text-[#201925] font-bold text-3xl">
						Welcome To Bumasel
					</h2>
					<p className="text-gray-color">
						login your account we have what you like
					</p>
					<form className="mt-8">
						<div>
							{/* first name and last name */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								<div>
									<div className="relative border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
										{/* You can replace the src with the appropriate icon for first name */}
										<FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
										<input
											type="text"
											className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm "
											placeholder="First Name"
										/>
									</div>
								</div>
								<div>
									<div className="relative border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
										{/* You can replace the src with the appropriate icon for last name */}
										<FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 text-gray-color" />
										<input
											type="text"
											className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
											placeholder="Last Name"
										/>
									</div>
								</div>
							</div>

							{/* gender */}

							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<FaTransgender className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
								<select className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm text-gray-color">
									<option value="">Select Your Gender</option>
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
							</div>
							{/* age range */}
							<div className="relative mt-6 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<PiTornadoBold className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
								<select className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm text-gray-color">
									<option value="">Select Age Range</option>
									<option value="18-24">18-24</option>
									<option value="25-34">25-34</option>
									<option value="35-44">35-44</option>
									<option value="45-54">45-54</option>
									<option value="55-64">55-64</option>
									<option value="65+">65+</option>
								</select>
							</div>

							{/* address */}
							<div className="relative mt-6 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<GoLocation className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
								<input
									type="text"
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
									placeholder="Home Address"
								/>
							</div>

							{/* email */}
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<AiTwotoneMail
									className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
									alt="email"
								/>
								<input
									type="email"
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
									placeholder="Email Address"
								/>
							</div>

							{/* phone number */}
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								{/* You can replace the src with the appropriate icon for phone number */}
								<BsTelephone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
								<input
									type="tel"
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
									placeholder="Phone Number"
								/>
							</div>

							{/* password */}
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<LockClosedIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
								<input
									type={showPassword ? "text" : "password"}
									className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
									placeholder="Enter Password"
									autocomplete="new-password"
								/>
								<div
									className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<FaRegEyeSlash className="h-5 w-5 text-gray-color" />
									) : (
										<FaRegEye className="h-5 w-5 text-gray-color" />
									)}
								</div>
							</div>

							{/* confirm password */}
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<PiPasswordDuotone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
								<input
									type={showPassword ? "text" : "password"}
									className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
									placeholder="Confirm Password"
									autocomplete="new-password"
								/>
								<div
									className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<FaRegEyeSlash className="h-5 w-5 text-gray-color" />
									) : (
										<FaRegEye className="h-5 w-5 text-gray-color" />
									)}
								</div>
							</div>
						</div>

						<p className="text-gray-color mt-10">
							By signing up you agree to our terms and condition & privacy
							policies
						</p>

						<button
							type="submit"
							className="mt-4 w-full px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
							onClick={handleSignupButtonClick}
						>
							Create Account
						</button>
					</form>

					{/* or */}
					<div className="flex items-center mt-8">
						<div className="w-full border-b border-gray-200"></div>
						<p className="mx-3 text-gray-color">Or</p>
						<div className="w-full border-b border-gray-200"></div>
					</div>

					{/* google and twitter login white background with border */}
					<div className="flex items-center gap-5 mt-4 mx-auto">
						<button className="w-full md:w-max pl-4 pr-8 py-3 bg-white text-black rounded-md border border-gray-200 hover:bg-purple-700 hover:text-white duration-500 focus:outline-none flex items-center cursor-pointer  text-sm  text-slate-900 focus:bg-gray-200 whitespace-nowrap gap-4">
							<FaGoogle className="h-5 w-5 mr-2" />
							Google
						</button>

						<button className="w-full md:w-max pl-4 pr-8 py-3 bg-white text-black rounded-md border border-gray-200 hover:bg-purple-700 hover:text-white duration-500  focus:outline-none flex items-center cursor-pointer  text-sm  text-slate-900 focus:bg-gray-200 whitespace-nowrap gap-4">
							<FaTwitter className="h-5 w-5 mr-2" />
							Twitter
						</button>
					</div>

					{/* dont have an acco */}
					<div className="flex items-center mt-8  mx-auto text-sm">
						<p className="text-gray-color">Already have an account ?</p>
						<p
							className="text-purple-700 ml-1 cursor-pointer"
							onClick={showRegister}
						>
							Login
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}