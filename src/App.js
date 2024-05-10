/** @format */


import "./App.css";
import { useState } from "react";
import { SearchIcon } from "./components/AppComponents/SearchIcon";
import Cardgroupfirst from "./components/AppComponents/Cardgroupfirst";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
     
        <div className="ml-4 flex justify-center pt-6 items-center md:ml-6  w-full">
          <div className="relative w-1/2">
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
        <Cardgroupfirst />
     
    </>
  );
}

export default App;
