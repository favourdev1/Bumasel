/** @format */

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { //ToastContainer,
	toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingState from "../../Props/LoadingState";

function ForgotPassword({ open, setOpen }) {
	const apiUrl = process.env.REACT_APP_API_URL;
	const [inputType, setInputType] = useState("email");
	const [inputValue, setInputValue] = useState("");
	const cancelButtonRef = useRef(null);
	const [showLoading, setShowLoading] = useState(false);

	const handleSubmitForgotPasswordClicked = async () => {
		// check if the field is filled
		if (inputValue === "") {
			toast.error("Please fill the field");
			setShowLoading(false);
			return;
		}
		try {
			axios
				.post(apiUrl + "/auth/reset-password", { [inputType]: inputValue })
				.then((res) => {
					console.log("Password reset request sent:", res.data);
					setOpen(false);
					if (res.data.status === "success") {
						toast.success(res.data.message);
					} else {
						toast.error(res.data.message);
					}
				})
				.catch((error) => {
					toast.error(error.response.data.message);
					console.error("Error sending password reset request:", error);
				})
				.finally(() => {
					setShowLoading(false);
				});
		} catch (error) {
			toast.error(
				"An internal error occurred, please contact admins for assistance."
			);
		}
	};

	return (
		<div className="">
			{/* conditionally show loading screen */}
			{showLoading === true && <LoadingState />}
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					className="relative z-10"
					initialFocus={cancelButtonRef}
					onClose={setOpen}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-xl bg-white/10" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 md:p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left py-4 shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-lg border">
									<div className="bg-white px-4  pb-4 py-10 w-full ">
										<div className="w-full ">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
												<Dialog.Title
													as="h3"
													className="text-xl font-semibold leading-2 text-gray-900 font-bold "
												>
													Forgot Password
												</Dialog.Title>
												<div className="mt-2 w-full">
													<p className="text-sm text-gray-500 ">
														Enter Your New Password Below to Reset Your Password
													</p>
												</div>

												<div className="mt-4 w-full">
													<div className="text-left">
														<label className=" text-gray-color text-sm text-left w-full font-bold ">
															{inputType === "email" ? "Email" : "Phone Number"}
														</label>
													</div>
													<div className="relative  border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
														<input
															type={inputType === "email" ? "email" : "tel"}
															className="w-full px-4 py-2  border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
															placeholder={
																inputType === "email" ? "Email" : "Phone Number"
															}
															autoComplete="email"
															value={inputValue}
															onChange={(e) => setInputValue(e.target.value)}
														/>
													</div>

													<p
														className="w-full text-right text-slate-500 mt-3 text-sm hover:underline hover:underline-offset-4 hover:text-purple-700 cursor-pointer duration-500 transition-all"
														onClick={() =>
															setInputType(
																inputType === "email" ? "phone" : "email"
															)
														}
													>
														Use{" "}
														{inputType === "email" ? "phone number" : "email "}{" "}
														instead
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className=" px-4 py-3 sm:flex gap-2 flex-col sm:px-6">
										<button
											type="button"
											className=" w-full justify-center rounded-xl bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:w-auto"
											onClick={handleSubmitForgotPasswordClicked}
										>
											Confirm
										</button>
										<button
											type="button"
											className="mt-3  w-full border-gray-color outline-none justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}
										>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}

export default ForgotPassword;
