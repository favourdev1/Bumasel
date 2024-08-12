import React, { useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const BrandFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border rounded-lg bg-white mb-3 px-2">
      <p
        onClick={toggleDropdown}
        className="w-full py-3 text-left px-4 flex items-center font-semibold justify-between "
      >
       Brands
        <span className={` transition-transform duration-300 cursor-pointer ${isOpen ? 'rotate-180' : ''}`}>
        <IoIosArrowUp className='w-4 h-4' />
        </span>
      </p>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <ul className="flex flex-col p-2 space-y-1  ">
          <li>
            <p className="w-full text-xs text-left pl-2 flex items-center justify-between py-2 hover:text-purple-700 hover:font-semibold cursor-pointer">Brands 1
            <IoIosArrowForward className="w-3 h-3 text-gray-400"/>
            
            </p>
          </li>
          <li>
            <p className="w-full text-xs text-left pl-2 flex items-center justify-between py-2 hover:text-purple-700 hover:font-semibold cursor-pointer">Brand 2
            <IoIosArrowForward className="w-3 h-3 text-gray-400"/>
            
            </p>
          </li>
          <li>
            <p className="w-full text-xs text-left pl-2 flex items-center justify-between py-2 hover:text-purple-700 hover:font-semibold cursor-pointer">Brand 3
            <IoIosArrowForward className="w-3 h-3 text-gray-400"/>
            
            </p>
          </li>
         
         
        </ul>
      </div>
    </div>
  );
};

export default BrandFilter;
