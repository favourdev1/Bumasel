/** @format */

// React imports
import React, { useEffect, useState } from "react";

// Icon imports
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FaTwitter, FaGoogle } from "react-icons/fa";

// CSS imports
import "./LoginPage.css";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	// Rest of your component code...

	useEffect(() => {
		// Save original overflow style
		const originalStyle = window.getComputedStyle(document.body).overflow;

		// Prevent scrolling on mount
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = originalStyle);
	}, []); // Empty array ensures effect is only run on mount and unmount

	return (
		<div className="h-screen m-0 bg-white flex items-center  px-3">
			<div className="hidden  lg:flex lg:w-2/5 overflow-hidden h-full  items-center">
				<div className="my-aut ">
					<img
						src="./images/login-girl.png"
						className="rounded-xl border-slate-100 h-[97vh] max-h-[100vh]  w-full h-full"
						alt="Login Page Image "
					/>
				</div>
			</div>
			<div className="w-full justify-center lg:w-3/5 xl:w-2/5 flex flex-col px-5 md:p-10 h-full">
				<img src="./images/logo.png" className="w-24 " alt=" App Logo" />
				<div className="flex flex-col md:my-auto">
					<h2 className="text-[#201925] font-bold text-3xl">
						Welcome To Bumasel
					</h2>
					<p className="text-gray-color">
						login your account we have what you like
					</p>
					<form className="mt-8">
						{/* email */}
						<div className="relative border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
							<img
								src="./svg/email.svg"
								className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700"
							/>
							<input
								type="text"
								className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm" // Add border-transparent and active:border-transparent
								placeholder="Email Address"
							/>
						</div>

						{/* password */}
						<div className="relative mt-4 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
							<LockClosedIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
							<input
								type={showPassword ? "text" : "password"}
								className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
								placeholder="Password"
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
						<div className="flex items-center">
							<p className="text-purple-700 mt-5 text-sm ml-auto">
								Forgotten Password ?
							</p>
						</div>
						<button
							type="submit"
							className="mt-4 w-full px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
						>
							Login
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
						<p className="text-gray-color">Don't have an account ?</p>
						<p className="text-purple-700 ml-1">Register</p>
					</div>
				</div>
			</div>
		</div>
	);
}
