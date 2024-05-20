import React, { useState } from "react";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import {AiTwotoneMail} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function CreateStorePage() {
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storeEmail, setStoreEmail] = useState("");
  const [productType, setProductType] = useState("");
  const [storeContact, setStoreContact] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleContinue = () => {
    // Perform any necessary validation here before showing success modal
    setShowSuccessModal(true);
  };
   const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

  return (
    <div className="fixed   overflow-y-auto top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 bautoplaySpeedackdrop-filter backdrop-blur z-50">
      <div className=" bg-white p-8 rounded-lg flex flex-col gap-3 w-[95%] md:w-[70%] mt-8 lg:w-[60%] xl:w-[30%]">
        <h2 className="text-2xl font-bold mb-0 w-full text-center">Create Store On Bumasell</h2>
      <p className="text-gray-400 w-full text-center mb-2">Pleae Fill In Your Store Information Below To Create Your Store</p>
        <div className="mb-4">
          <label htmlFor="Name" className="block mb-1">
            Store Name
          </label>
          <div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
            <input
              type="text"
              className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
              placeholder="What Is Your Store Name"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="Name" className="block mb-1">
            Store Description
          </label>
          <div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
            <input
              type="text"
              className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
              placeholder="Write Description"
              value={storeDescription}
              onChange={(e) => setStoreDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
            <AiTwotoneMail
              className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
              alt="email"
            />
            <input
              type="email"
              className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
              placeholder="osondusweet@gmail.com"
              value={storeEmail}
              onChange={(e) => setStoreEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="product" className="block mb-1">
            Product Type
          </label>
          <select
            name="product type"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          >
            <option value="">Select Product Type</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="Tel" className="block mb-1">
            Phone Number
          </label>
          <div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
            {/* You can replace the src with the appropriate icon for phone number */}

            <BsTelephone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
            <input
              type="tel"
              className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
              placeholder="+234702862716"
              value={storeContact}
              onChange={(e) => setStoreContact(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1">
            Address
          </label>
          <div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
            <FaLocationArrow
              className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
              alt="Address"
            />
            <input
              type="text"
              className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
              placeholder="Where are you located?"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
            />
          </div>
        </div>

        <button
          className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-500"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
          <div className="bg-white p-8 rounded-lg">
            <button className="" onClick={handleCloseSuccessModal}>
              <FaArrowLeft className="text-gray-600" />
            </button>
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p>Your store has been created successfully.</p>
            <button
          className="bg-purple-700 w-full text-white px-4 py-2 rounded-md hover:bg-purple-500"
          onClick={handleContinue}
        >
          Continue
        </button>
          </div>

        </div>
      )}
    </div>
  );
}
