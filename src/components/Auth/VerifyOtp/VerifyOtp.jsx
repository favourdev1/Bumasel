/** @format */

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function VerifyOtp({ open, setOpen, email  }) {
	const [otp, setOtp] = useState(["", "", "", "", "", ""]);

	const cancelButtonRef = useRef(null);

	

    const onOpenEmailAppClicked = () => {
        // check if email ends with gmail.com
        if (email.endsWith("gmail.com")) {
            window.open(`https://gmail.com`);
        } else {
            window.open(`https://${email.split("@")[1]}`);
        }

    }
	

	return (
		<div className="">
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
						<div className="flex min-h-full itemphps-center justify-center p-4 md:p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left py-4 shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-lg border text-sm">
									<div className="bg-white px-4  pb-4 py-10 ">
										<div className="w-full ">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
												<Dialog.Title
													as="h3"
													className="text-xl font-semibold leading-2 text-gray-900 font-bold "
												>
													Verify Email
												</Dialog.Title>
												<div className="mt-2 w-full">
													<p className="text-sm text-gray-500 ">
														We sent a link to {email} to help
														verify your email address
													</p>
												</div>
												<div className="flex items-center justify-center w-full">
													<img
														src="/images/Email.png"
														alt="email"
														className="w-1/2"
													/>
												</div>

                                                <div className="mt-4 w-full flex justify-center">
                                                    Didnt receive the email? <span className="text-purple-700 cursor-pointer hover font-semibold hover:underline ml-4">Resend</span>
                                                </div>
											</div>
										</div>
									</div>
									<div className=" px-4 py-3 sm:flex gap-2 flex-col sm:px-6">
										<button
											type="button"
											className=" w-full justify-center rounded-md bg-purple-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:w-auto"
											onClick={onOpenEmailAppClicked}
										>
											Open Email App
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

export default VerifyOtp;
