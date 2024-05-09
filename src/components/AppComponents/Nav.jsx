import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "./SearchIcon.jsx";
import RateIcon from "../Icon/RateIcon.jsx";
import HeartIcon from "../Icon/HeartIcon.jsx";
import HelpIcon from "../Icon/HelpIcon.jsx";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <nav className=" py-4 px-6 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0">
              <Link to={"/"} className="text-white text-lg font-bold">
                Your Brand
              </Link>
            </div>
            <div className="ml-4 flex items-center md:ml-6  w-2/3">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-[#FAF7FF] w-full rounded-3xl text-gray-600 border-0 px-3 py-2  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 right-0 flex items-center ">
                  <button
                    type="submit"
                    className="text-gray-300 bg-[#8527CD] hover:text-white focus:outline-none px-4 py-2 rounded-3xl"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Button
                  color=""
                  startContent={<HeartIcon />}
                  className="bg-[#FAF7FF] text-[#8527CD]"
                >
                  Saved
                </Button>
                <Button
                  color=""
                  startContent={<HeartIcon />}
                  className="bg-[#8527CD] text-white"
                >
                  Register/Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" py-4  hidden lg:flex">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-10 items-center w-full ">
            <Link to={"/"}>Home</Link>
            <Link to={""}>Sell</Link>
            <Link to={""}>Hottest Deals</Link>
            <Button color="" endContent={<RateIcon />} className="">
              Ratings
            </Button>
            <Button color="" endContent={<HelpIcon />} className="">
              Need Help
            </Button>
            <div className="flex gap-6 mx-4">
              <Link to={""} className="text-[#8527CD]">
                Goods
              </Link>
              <Link to={""}>Services</Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" py-4 justify-start  hidden lg:flex bg-[#8527CD] w-full">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex gap-10 items-center w-full text-white ">
            <Link to={""}>
              <Button color="" startContent={<RateIcon />} className="">
                Category
              </Button>
            </Link>
            <Link to={""}>Fashion</Link>
            <Link to={""}>Electronics</Link>
            <Link to={""}>Phones</Link>
            <Link to={""}>Computers</Link>
            <Link to={""}>Books</Link>
            <Link to={""}>Food</Link>
            <Link to={""}>Kitchen Appliances</Link>
            <Link to={""}>Beauty</Link>
            <Link to={""}>Others</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
