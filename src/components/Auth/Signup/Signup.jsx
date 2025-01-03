/** @format */
import React, { useEffect, useState } from "react";
import axios from "axios";
// icons
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { FaTwitter } from "react-icons/fa";

import { FiUser } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

import { AiTwotoneMail } from "react-icons/ai";
import { PiPasswordDuotone } from "react-icons/pi";
import { IoMdArrowBack } from "react-icons/io";
// CSS imports
import "../Login/LoginPage";
// import widths from "../animatedWidth";

import "../Login/LoginPage.css";

// toast lib

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import LoadingState from "../../Props/LoadingState";

import Cookies from "js-cookie";
import { FcGoogle } from "react-icons/fc";

import { Checkbox, Select } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import VerifyOtp from "../VerifyOtp/VerifyOtp";
// ==============================================================
// function here
// ==============================================================
export default function Signup() {
	const apiUrl = process.env.REACT_APP_API_URL;

	const [showPassword, setShowPassword] = useState(false);
	const [animatedWidth, setAnimatedWidth] = useState("w-full");
	const [step, setStep] = useState(1);
	const [acceptConditions, setacceptConditions] = useState(false);
	const[showVerifyOtp,setShowVerifyOtp]=useState(false)


	// form data states
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [gender, setGender] = useState("");
	const [ageRange, setAgeRange] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");

	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showLoading, setShowLoading] = useState(false);
	const [country, setCountry] = useState("");
	const [state, setState] = useState("");

	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		// Generate a random index excluding the current index
	// 		let randomIndex;
	// 		do {
	// 			randomIndex = Math.floor(Math.random() * widths.length);
	// 		} while (randomIndex === widths.indexOf(animatedWidth));

	// 		setAnimatedWidth(widths[randomIndex]);
	// 	}, 2000);

	// 	return () => clearInterval(intervalId);
	// }, [animatedWidth, widths]);

	useEffect(() => {
		// Check if the user is already logged in
		const token = Cookies.get("token");
		if (token) {
			window.location.href = "/";
		}
	}, []);

	const showRegister = () => {
		window.location.href = "/login";
	};

	function handleSignupButtonClick(event) {
		if (event) {
			const userData = {
				firstName: firstName,
				lastName: lastName,
				gender: gender,
				ageRange: ageRange,
				address: address,
				country: country,
				email: email,
				role: "EndUser",
				state:state,

				password: password,
				confirmPassword: confirmPassword
			};

			event.preventDefault();

			const emptyFields = Object.entries(userData)
				.filter(([key, value]) => value === "")
				.map(([key]) => key.replace(/_/g, " "));

			if (emptyFields.length > 0) {
				toast.error(
					`The following fields must be filled out: ${emptyFields.join(", ")}`
				);
				return;
			}
			setShowLoading(true);

			try {
				console.log(apiUrl + "/auth/signup")
				axios
					.post(apiUrl + "/auth/signup", userData)
					.then((res) => {
						console.log(res.data);
						let response = res.data.data;
						if (response.status === "error") {
							toast.error(response.message);
						} else {
							toast.success(res.data.message);
							setShowVerifyOtp(true);
							// setTimeout(() => {
							// 	window.location.href = "/login";
							// }, 1000);
						}
					})
					.catch((error) => {
						toast.error(error.response.data.message);
						console.log(error.response);
					})
					.finally(() => {
						setShowLoading(false);
					});
			} catch (error) {
				// console.log(error.response.data);
				toast.error(
					"An internal error occured, please contact admins for assistance."
				);
			}
		}
	}

	function handleProceedButtonClicked() {
		// check if first name , lastname , email and password is not eentered
		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			toast.error("Please fill in all required fields");
			return;
		}
		setStep(2);
	}

	useEffect(() => {
		// Save original overflow style
		const originalStyle = window.getComputedStyle(document.body).overflow;

		// Prevent scrolling on mount
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = originalStyle);
	}, []); // Empty array ensures effect is only run on mount and unmount

	///google login onclick
	function handleGoogleLogin() {
		window.location.href = apiUrl + "/accounts/google/login/";
	}
	return (
		<div className="h-screen m-0 bg-white flex items-center  px-3">
			{/* conditionally show loading screen */}
			{showLoading === true && <LoadingState />}

			{/* coonditionally show VerifyOtp Interface */}
			{<VerifyOtp open = {showVerifyOtp} setOpen={setShowVerifyOtp} email={email} />}

			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={true}
				newestOnTop={true}
				closeOnClick={true}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				limit={1}
				toastStyle={{ fontSize: "14px" }}
			/>
			<div className="hidden  lg:flex lg:w-3/5 xl:w-2/5  relative overflow-hidden  items-center">
				<div className=" md:h-[60vh] lg:h-[90dvh] top-[5%] left-10 ">
					<img
						src="./images/login-girl.png"
						className="rounded-xl border-slate-100  max-h-[100dvh]  w-full h-full"
						alt="Login Page"
					/>
					<div className="absolute bottom-5 w-full left-8 duration-500  py-10">
						<div className="backdrop-blur-xl bg-white/20  w-10/12 rounded-lg p-4 text-white py-5">
							<p className="font-bold text-xl">
								The Best Ecommerce Platform <br /> You Can Ask For
							</p>
							<p className="text-base pr-5">
								we sell everything you need for your day to day activities
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full justify-center md:1/5 lg:w-3/5 xl:w-2/5  flex flex-col px-5 md:p-10   h-[100dvh] overflow-y-scroll hide-scrollbar ">
				<img src="./images/logo.png" className="w-24 " alt=" App Logo" />
				<form className="mt-4">
					<div className="flex flex-col   pb-10 ">
						<div className="pb-10">
							{/* back button  */}
							{step === 2 && (
								<>
									{" "}
									<div
										className="flex items-center hover:text-purple-700  hover:underline hover:font-bold duratioin-500 cursor-pointer mb-3 text-xs text-gray-400 w-max"
										onClick={() => setStep(1)}
									>
										<IoMdArrowBack className="size-5" />
										Go Back
									</div>
									<div className="flex items-center gap-1  w-96">
										<div
											className={`rounded-full duration-500 bg-purple-700 h-1  ${animatedWidth}`}
										></div>
										<div className="rounded-full bg-slate-100 h-1 flex-1 "></div>
									</div>
								</>
							)}
						</div>
						{/* hidden fields for role  */}
						<input type="hidden" name="role" value="user" />
						{/*============================================== page 1 ==============================================  */}
						{step === 1 ? (
							<div>
								<h2 className="text-[#201925] font-bold text-3xl">
									Create Account
								</h2>
								<p className="text-gray-color">
									To access the product you're interested in.
								</p>

								<div className="mt-5">
									{/* first name and last name */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
										<div>
											<div className="relative border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
												{/* You can replace the src with the appropriate icon for first name */}
												<FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
												<input
													type="text"
													name="first_name"
													value={firstName}
													onChange={(e) => setFirstName(e.target.value)}
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
													name="last_name"
													value={lastName}
													onChange={(e) => setLastName(e.target.value)}
													className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
													placeholder="Last Name"
												/>
											</div>
										</div>
									</div>

									{/* email */}
									<div className="relative  border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 mt-4 outline-none py-1">
										<AiTwotoneMail
											className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
											alt="email"
										/>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
											placeholder="Email Address"
										/>
									</div>

									{/* password */}
									<div className="relative mt-4 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
										<LockClosedIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
										<input
											type={showPassword ? "text" : "password"}
											className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
											name="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Enter Password"
											autocomplete="new-password"
										/>
										<div
											className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
											onClick={(e) => setShowPassword(!showPassword)}
										>
											{showPassword ? (
												<FaRegEyeSlash className="h-5 w-5 text-gray-color" />
											) : (
												<FaRegEye className="h-5 w-5 text-gray-color" />
											)}
										</div>
									</div>

									{/* confirm password */}
									<div className="relative mt-4 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
										<PiPasswordDuotone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
										<input
											name="confirmPassword"
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
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

								<p
									className="inline-flex justify-center items-center mt-4 w-full px-4 py-2 bg-purple-700 text-white transition-all  rounded-full duration-500 hover:bg-purple-700 focus:outline-none cursor-pointer focus:bg-purple-700 hover:scale-[.99] scale-100"
									onClick={handleProceedButtonClicked}
								>
									Proceed
								</p>

								{/* or */}
								<div className="flex items-center   mt-8">
									<div className="w-full border-b border-gray-200"></div>
									<p className="mx-3 text-gray-color">Or</p>
									<div className="w-full border-b border-gray-200"></div>
								</div>

								{/* google and twitter login white background with border */}
								<div className="flex items-center justify-center  gap-5 mt-4 mx-auto">
									<button
										className="w-full md:w-max pl-4 pr-8 py-3 bg-white  rounded-full border border-gray-300 hover:bg-purple-700 hover:text-white duration-500 focus:outline-none flex items-center cursor-pointer  text-sm  text-slate-900 focus:bg-gray-200 whitespace-nowrap gap-4"
										onClick={handleGoogleLogin}
									>
										<FcGoogle className="h-5 w-5 mr-2" />
										Google
									</button>

									<button className="w-full md:w-max pl-4 pr-8 py-3 bg-white  rounded-full border border-gray-300 hover:bg-gray-900 hover:text-white duration-500  focus:outline-none flex items-center cursor-pointer  text-sm  text-slate-900 focus:bg-gray-200 whitespace-nowrap gap-4">
										<FaTwitter className="h-5 w-5 mr-2" />
										Twitter
									</button>
								</div>

								{/* dont have an acco */}
								<div className="flex items-center justify-center mt-8  mx-auto text-sm">
									<p className="text-gray-color">Already have an account ?</p>
									<p
										className="text-purple-700 ml-1 cursor-pointer"
										onClick={showRegister}
									>
										Login
									</p>
								</div>
							</div>
						) : (
							<div>
								{/* page 2 */}
								<div>
									{/* gender */}
									<div className="mt-4">
										<label className=" text-gray-color text-sm">Gender</label>

										<div className="relative flex-1 ">
											<Select
												name="gender"
												value={gender}
												onChange={(e) => setGender(e.target.value)}
												className={clsx(
													" block w-full appearance-none rounded-lg border bg-white/5 py-2 px-3 text-sm/6 ",
													"border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none data-[focus]:border-gray-200",
													// Make the text of each option black on Windows
													"*:text-black"
												)}
											>
												<option value="">Select Your Gender</option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Other">Other</option>
											</Select>
											<ChevronDownIcon
												className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
												aria-hidden="true"
											/>
										</div>
									</div>
									{/* age range */}
									<div className="mt-4">
										<label className=" text-gray-color text-sm">
											Age Range
										</label>
										<div className="relative flex-1 ">
											<Select
												className={clsx(
													" block w-full appearance-none rounded-lg border bg-white/5 py-2 px-3 text-sm/6 ",
													"border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none data-[focus]:border-gray-200",
													// Make the text of each option black on Windows
													"*:text-black"
												)}
												name="ageRange"
												value={ageRange}
												onChange={(e) => setAgeRange(e.target.value)}
											>
												<option value="">Select Age Range</option>
												<option value="18-24">18-24</option>
												<option value="25-34">25-34</option>
												<option value="35-44">35-44</option>
												<option value="45+">45+</option>
											</Select>
											<ChevronDownIcon
												className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
												aria-hidden="true"
											/>
										</div>
									</div>

									{/* email */}
									<div className="flex  items-centerflex items-center gap-4 mt-4">
										<div className="relative flex-1 ">
											{/* country */}
											<label className=" text-gray-color text-sm">
												Country
											</label>
											<div className="relative flex-1 ">
												<Select
													className={clsx(
														" block w-full appearance-none rounded-lg border bg-white/5 py-2 px-3 text-sm/6 ",
														"border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none data-[focus]:border-gray-200",
														// Make the text of each option black on Windows
														"*:text-black"
													)}
													name="country"
													value={country}
													onChange={(e) => setCountry(e.target.value)}
												>
													<option value="">Select Country</option>
													<option value="USA">USA</option>
													<option value="Canada">Canada</option>
													<option value="UK">UK</option>
												</Select>
												<ChevronDownIcon
													className="group pointer-events-none absolute top-2.5 right-2.5 size-4 "
													aria-hidden="true"
												/>
											</div>
										</div>

										{/* state */}
										<div className="relative flex-1 ">
											{/* country */}
											<label className=" text-gray-color text-sm">State</label>
											<div className="relative flex-1 ">
												<Select
													name="state"
													value={state}
													onChange={(e) => setState(e.target.value)}
													className={clsx(
														" block w-full appearance-none rounded-lg border bg-white/5 py-2 px-3 text-sm/6 ",
														"border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none data-[focus]:border-gray-200",
														// Make the text of each option black on Windows
														"*:text-black"
													)}
												>
													<option value="">Select State</option>
													<option value="California">California</option>
													<option value="Texas">Texas</option>
													<option value="New York">New York</option>
													{/* Add more states as needed */}
												</Select>
											</div>
										</div>
									</div>

									{/* address */}
									<div className="mt-4">
										<label className=" text-gray-color text-sm">
											Physical Address
										</label>
										<div className="relative  border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
											<GoLocation className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
											<input
												type="text"
												name="address"
												value={address}
												onChange={(e) => setAddress(e.target.value)}
												className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
												placeholder="Home Address"
											/>
										</div>
									</div>
								</div>

								<div className="flex items-center mt-10 gap-4">
									<Checkbox
										checked={acceptConditions}
										onChange={setacceptConditions}
										className="group size-5 rounded-md bg-white/10 p-1 ring-2 ring-purple-700 ring-inset data-[checked]:bg-white"
									>
										<CheckIcon className="hidden size-3 fill-black group-data-[checked]:block text-purple-700 font-black" />
									</Checkbox>
									<p className="text-gray-color  text-sm">
										By signing up you agree to our{" "}
										<a
											href="terms"
											className="hover:underline duration-500 font-bold text-purple-700"
										>
											Terms and Condition{" "}
										</a>
										&{" "}
										<a
											href="privacyPolicy"
											className="hover:underline duration-500 font-bold text-purple-700"
										>
											Privacy policies
										</a>
									</p>
								</div>
								<button
									type="submit"
									className="inline-flex justify-center items-center mt-4 w-full px-4 py-2 bg-purple-700 text-white transition-all  rounded-full duration-500 hover:bg-purple-700 focus:outline-none focus:bg-purple-700 hover:scale-[.99] scale-100"
									onClick={handleSignupButtonClick}
								>
									Create Account
								</button>
							</div>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
