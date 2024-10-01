/** @format */

// React imports
import React, { useEffect, useState } from "react";

// Third party libraries
import { FaRegEyeSlash, FaRegEye, FaTwitter } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { LockClosedIcon } from "@heroicons/react/24/outline";

// toast lib
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Local imports
import widths from "../animatedWidth";
import ResetPassword from "../ResetPassword/ResetPassword";
import ForgotPassword from "../ForgotPassword/ForgotPassword";
import VerifyOtp from "../VerifyOtp/VerifyOtp";
import LoadingState from "../../Props/LoadingState";
import axios from "axios";
import Cookies from "js-cookie";
import "./LoginPage.css";
import { FcGoogle } from "react-icons/fc";
import SuccessModal from "../SucessModal/SuccessModal";

export default function LoginPage() {
	// State declarations
	const [showPassword, setShowPassword] = useState(false);
	const [openResetPassword, setOpenResetPassword] = useState(false);
	const [openverifyOTPModal, setopenVerifyOTPModal] = useState(false);
	const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);
	const [animatedWidth, setAnimatedWidth] = useState("w-full");
	const [showLoading, setShowLoading] = useState(false);
	const apiUrl = process.env.REACT_APP_API_URL;
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Function to navigate to registration page
	const showRegister = () => {
		window.location.href = "/signup";
	};

	// check if user is already logged in,
	useEffect(() => {
		// Check if the user is already logged in
		const token = Cookies.get("token");
		if (token) {
			window.location.href = "/";
		}
	}, []);

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

	// Effect hook to prevent scrolling on mount
	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = "hidden";
		return () => (document.body.style.overflow = originalStyle);
	}, []);

	// handle login function
	function handleLoginButtonClick(event) {
		if (event) {
			const userData = {
				email: email,

				password: password
			};

			event.preventDefault();

			const allFieldsFilled = Object.values(userData).every(
				(field) => field !== ""
			);

			if (!allFieldsFilled) {
				toast.error("All fields must be filled out");
				return;
			}
			setShowLoading(true);
			try {
				axios
					.post(apiUrl + "/auth/login", userData)
					.then((res) => {
						console.log(res.data);
						let response = res.data.data.user;
						console.log(response);
						if (response.status == "error") {
							toast.error(response.message);
						} else {
							toast.success(res.data.message);
							let token = res.data.data.accessToken;

							Cookies.set("token", token, { expires: 2 });
							Cookies.set("full_name", response.full_name, { expires: 2 });
							Cookies.set("first_name", response.first_name, { expires: 2 });
							Cookies.set("last_name", response.last_name, { expires: 2 });
							Cookies.set("email", response.email, { expires: 2 });
							Cookies.set("phone", response.phone_number, { expires: 2 });
							Cookies.set("role", response.role, { expires: 2 });
							Cookies.set("id", response.id, { expires: 2 });
							Cookies.set("is_activated", response.is_activated, {
								expires: 2
							});
							Cookies.set("is_verified", response.is_verified, { expires: 2 });
							Cookies.set("is_student", response.is_student, { expires: 2 });
							Cookies.set("profile_image", response.profile_image, {
								expires: 2
							});
							Cookies.set("address", response.address, { expires: 2 });
							Cookies.set("country", response.country, { expires: 2 });
							Cookies.set("state", response.state, { expires: 2 });
							Cookies.set("gender", response.gender, { expires: 2 });
							setTimeout(() => {
								window.location.href = "/";
							}, 1000);
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

	///google login onclick
	function handleGoogleLogin() {
		window.location.href = apiUrl + "/accounts/google/login/";
	}

	// ========================================================================
	// =====================Return Function ====================================
	// =====================================================================
	return (
		<div className="h-screen m-0 bg-white flex items-center  px-3">
			{showLoading == true && <LoadingState />}

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
				limit={3}
				toastStyle={{ fontSize: "14px" }}
			/>
			<ForgotPassword
				open={openForgotPasswordModal}
				setOpen={setOpenForgotPasswordModal}
			/>
			<VerifyOtp open={openverifyOTPModal} setOpen={setopenVerifyOTPModal} />

			{/* <SuccessModal
				open={openResetPassword} setOpen={setOpenResetPassword}
			/> */}
			<ResetPassword open={openResetPassword} setOpen={setOpenResetPassword} />
			<div className="hidden  lg:flex lg:w-3/5 xl:w-2/5  relative overflow-hidden  items-center">
				<div className=" md:h-[60vh] lg:h-[90dvh] top-[5%] left-10 ">
					<img
						src="./images/login-girl.png"
						className="rounded-xl border-slate-100  max-h-[100dvh]  w-full h-full"
						alt="Login Page"
					/>
					<div className="absolute bottom-5 w-full pl-10 py-10">
						<div className="backdrop-blur-xl bg-white/20 e w-3/4 rounded-lg p-4 text-white py-5">
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
			<div className="w-full justify-center md:1/5 lg:w-3/5 xl:w-2/5  flex flex-col px-5 md:p-10   h-[100dvh] overflow-y-scroll hide-scrollbar">
				<img src="./images/logo.png" className="w-24 " alt=" App Logo" />
				<div className="flex flex-col ">
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
						{/* email */}
						<div className="relative border overflow-hidden border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
							<AiTwotoneMail
								className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
								alt="email"
							/>
							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm" // Add border-transparent and active:border-transparent
								placeholder="Email Address"
							/>
						</div>

						{/* password */}
						<div className="relative mt-4 border overflow-hidden border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
							<LockClosedIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
							<input
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
								placeholder="Password"
								autoComplete="new-password"
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
							<p
								className="text-purple-700  mt-5 text-sm  ml-auto cursor-pointer"
								onClick={() => setOpenForgotPasswordModal(true)}
							>
								Forgot Password ?
							</p>
						</div>
						<button
							onClick={handleLoginButtonClick}
							type="submit"
							className="mt-4 w-full px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-700 focus:outline-none focus:bg-purple-700"
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
					<div className="flex items-center justify-between gap-5 mt-4 mx-auto">
						<button
							className="w-full md:w-max pl-4 pr-8 py-3 bg-white text-black rounded-full hover:shadow-md border border-gray-200 hover:bg-purple-700 hover:text-white duration-500 focus:outline-none flex items-center cursor-pointer  text-sm  text-slate-900 focus:bg-gray-200 whitespace-nowrap gap-4"
							onClick={handleGoogleLogin}
						>
							<FcGoogle className="h-5 w-5 mr-2" />
							Google
						</button>

						<button className="w-full md:w-max pl-4 pr-8 py-3 bg-white text-black rounded-full hover:shadow-md border border-gray-200 hover:bg-purple-700 hover:text-white duration-500  focus:outline-none flex items-center cursor-pointer  text-sm  text-slate-900 focus:bg-gray-200 whitespace-nowrap gap-4">
							<FaTwitter className="h-5 w-5 mr-2" />
							Twitter
						</button>
					</div>

					{/* dont have an acco */}
					<div className="flex items-center mt-8  mx-auto text-sm">
						<p className="text-gray-color">Don't have an account ?</p>
						<p
							className="text-purple-700 ml-1 cursor-pointer hover:underline"
							onClick={showRegister}
						>
							Register
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
