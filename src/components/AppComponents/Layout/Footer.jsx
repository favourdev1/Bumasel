import React from "react";
import Rectangle from "../../Icon/Rectangle.png";
import { Link } from "react-router-dom";
import Vector from "../../Icon/Vector.png";
import Vector4 from "../../Icon/vector4.png";

function Footer() {
  return (
    <div className="relative">
      <div
        className="bg-cover  mx-auto  bg-center h-96 relative"
        style={{ backgroundImage: `url(${Rectangle})` }}
      >
        {/* Overlay Text */}
        <div className="absolute inset-0 flex justify-between px-20 py-10 text-white ">
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-xl  mb-4">
              Would you like to know when we have a new product?
            </h1>
            <div className=" flex items-center  ">
              <div className="relative w-full">
                <input
                  type="text"
                  className="bg-[#FAF7FF] w-full rounded-3xl text-gray-600 border-0 px-3 py-2  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Email"
                />
                <div className="absolute inset-y-0 right-0 flex items-center ">
                  <button
                    type="submit"
                    className="text-gray-300 bg-[#8527CD] hover:text-white focus:outline-none px-4 py-2 rounded-3xl"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <p>A product of</p>
            <p className="font-bold text-xl">Evihs limited</p>
            <p>
              7 , RED ROOF BUILDING , BEHIND SCHOOL STADIUM, UMUDIKE UMUAHIA,
              UMUDIKE ABIA STATE NIGERIA
            </p>
            <p>Phone: +(234) 8164643528</p>
            <p>Email: Evihslimited6@gmail.com</p>
          </div>
          <div className="flex flex-col w-1/3">
            <div className="flex gap-10">
              <ul className="list-none">
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Privacy & Policy</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Terms & Conditions</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Our Blog</Link>
                </li>
              </ul>
              <ul className="list-none">
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Team</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Sell On Bumasel</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>About us</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Contact us</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>FAQ</Link>
                </li>
              </ul>
              <ul className="list-none">
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Categories</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Rating</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Need Help</Link>
                </li>
                <li className="text-gray-200 hover:text-gray-800 transition-colors duration-300">
                  <Link to={""}>Register</Link>
                </li>
              </ul>
            </div>
            <div className="items-end flex flex-col mt-24 mr-10">
              <p>Follow us on social media</p>
              <div className="flex gap-4  w-1/2 px-3  mt-2">
                <a href="#">
                  <img src={Vector} alt="" />
                </a>
                <a href="#">
                  <img src={Vector4} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
