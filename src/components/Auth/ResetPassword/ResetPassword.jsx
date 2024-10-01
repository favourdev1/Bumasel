/** @format */

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { PiPasswordDuotone } from "react-icons/pi";

function ResetPassword({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const cancelButtonRef = useRef(null);

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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left py-4 shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-lg border">
                  <div className="bg-white px-4  pb-4 py-10 ">
                    <div className="w-full ">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-semibold leading-2 text-gray-900 font-bold "
                        >
                          Reset Password
                        </Dialog.Title>
                        <div className="mt-2 w-full">
                          <p className="text-sm text-gray-500 ">
                            Enter Your New Password Below to Reset Your Password
                          </p>
                        </div>

                        <div className="mt-4 w-full">
                          <div className="relative mt-4 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
                            <LockClosedIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />
                            <input
                              type={showPassword ? "text" : "password"}
                              className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
                              placeholder="Enter new password"
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

                          <div className="relative mt-4 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
                            <PiPasswordDuotone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 focus-within:text-purple-700 text-gray-color" />

                            <input
                              type={showPassword ? "text" : "password"}
                              className="w-full px-4 py-2 ml-3 pl-8 border-transparent bg-transparent focus:border-transparent  focus:bg-transparent active:border-transparent ring-none focus:outline-none focus:ring-0 text-sm"
                              placeholder="Confirm password"
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
                      </div>
                    </div>
                  </div>
                  <div className=" px-4 py-3 sm:flex gap-2 flex-col sm:px-6">
                    <button
                      type="button"
                      className=" w-full justify-center rounded-md bg-purple-700 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Reset Password
                    </button>
                    <button
                      type="button"
                      className="mt-3  w-full border-gray-color outline-none justify-center rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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

export default ResetPassword;
