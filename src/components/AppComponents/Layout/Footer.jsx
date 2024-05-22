/** @format */

import React from "react";

import { Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
function Footer() {
  return (
    <div className="relative ">
      <div
        className="bg-cover  mx-auto   bg-center  relative"
        style={{ backgroundImage: `url(${"/images/Rectangle.png"})` }}
      >
        <div className="bg-black/30 z-10 h-full w-full top-0 pt-16 pb-5">
          {/* Overlay Text */}
          <div className=" lg:container mx-auto block md:flex justify-between  px-4 text-white ">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <h1 className="md:text-xl  mb-4">
                Would you like to know when we have a new product?
              </h1>
              <div className=" flex items-center w-full md:w-4/6  ">
                <div className="relative w-full">
                  <input
                    type="text"
                    className=" w-full rounded-3xl text-gray-600 border text-sm px-5 py-3  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent"
                    placeholder="Email"
                  />
                  <div className="absolute inset-y-0 right-1 flex items-center ">
                    <button
                      type="submit"
                      className="text-white text-sm bg-purple-800 hover:text-white focus:outline-none px-4 py-2 rounded-3xl"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <p className="text-sm text-gray-300 pb-0">A product of</p>
                <p className="font-semibold text-xl mt-0">Evihs Limited</p>
              </div>

              <div className="text-sm font-thin flex flex-col gap-y-3">
                <p>
                  7 , RED ROOF BUILDING , BEHIND SCHOOL STADIUM, UMUDIKE
                  UMUAHIA, UMUDIKE ABIA STATE NIGERIA
                </p>
                <p>Phone: +(234) 8164643528</p>
                <p>Email: Evihslimited6@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
              <div className="flex gap-10">
                <ul className="list-none flex flex-col gap-y-4">
                  <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                    <Link to={""}>Privacy & Policy</Link>
                  </li>
                  <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                    <Link to={""}>Terms & Conditions</Link>
                  </li>
                  <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                    <Link to={""}>Our Blog</Link>
                  </li>
                </ul>

                <div>
                  <div className="flex items-center gap-x-10">
                    <ul className="list-none flex flex-col gap-y-4">
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Team</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Sell On Bumasel</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>About us</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Contact us</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>FAQ</Link>
                      </li>
                    </ul>
                    <ul className="list-none flex flex-col gap-y-4">
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Categories</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Rating</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Need Help</Link>
                      </li>
                      <li className="text-gray-200 hover:text-gray-300 hover:underline hover:decoration-2 duration-500 transition-colors duration-300">
                        <Link to={""}>Register</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="items-start flex flex-col mt-10 ms-auto">
                    <p className="font-light text-xl">
                      Follow us on social media
                    </p>
                    <div className="flex gap-x-3 items-center mt-4">
                      <GrInstagram className="w-5 h-5 cursor-pointer" />
                      <ImFacebook2 className="w-4 h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-200 mt-5 ">
            &copy; Copyright 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
