/** @format */

import React, { useState } from "react";
import { FaArrowLeft, FaLocationArrow } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function StoreInfo() {
	const [storeName, setStoreName] = useState("");
	const [storeDescription, setStoreDescription] = useState("");
	const [storeEmail, setStoreEmail] = useState("");

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
		<div className="px-2      w-full h-full flex flex-col justify-center  bg-white rounded-xl ">
			<div className=" mt-10 mb-5">
				<h1 className="font-bold text-xl">Your Infomation</h1>
				<p className="text-gray-400 text-sm">
					Kindly provide us with more information
				</p>
			</div>
			<div className="w-full text-gray-700 text-sm mt-5">
				<div className="mb-4">
					<label htmlFor="Name" className="text-sm mb-0 font-semibold">
						Store Name
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						<input
							type="text"
							className="w-full px-4  py-2 duration-500  border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="What Is Your Store Name"
							value={storeName}
							onChange={(e) => setStoreName(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-4">
					<label htmlFor="description" className="text-sm mb-0 font-semibold">
						Store Description
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						<textarea
							type="text"
							className="w-full px-4  py-2 duration-500  border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="Write Description"
							value={storeDescription}
							onChange={(e) => setStoreDescription(e.target.value)}
						/>
					</div>
				</div>
				<div className="mb-4">
					<label htmlFor="email" className="text-sm mb-0 font-semibold">
						Store Email Address
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						<img src="/images/sms.png"
							className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-400"
							alt="email"
						/>
						<input
							type="email"
							className="w-full px-4 ml-6 py-2 duration-500  border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="osondusweet@gmail.com"
							value={storeEmail}
							onChange={(e) => setStoreEmail(e.target.value)}
						/>
					</div>
				</div>

				{/* store contact 1k */}
				<div className="mb-4">
					<label htmlFor="Tel" className="text-sm mb-0 font-semibold">
						Store Contact 1
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						{/* You can replace the src with the appropriate icon for phone number */}

						<BsTelephone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-400" />
						<input
							type="tel"
							className="w-full px-4 ml-6 py-2 duration-500  border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="+234702862716"
							value={storeContact}
							onChange={(e) => setStoreContact(e.target.value)}
						/>
					</div>
				</div>
				{/* store contact 2 */}
				<div className="mb-4">
					<label htmlFor="Tel" className="text-sm mb-0 font-semibold">
						Store Contact 2
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						{/* You can replace the src with the appropriate icon for phone number */}

						<BsTelephone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-400" />
						<input
							type="tel"
							className="w-full px-4 ml-6 py-2 duration-500  border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="+234702862716"
							value={storeContact}
							onChange={(e) => setStoreContact(e.target.value)}
						/>
					</div>
				</div>

				{/* store url */}
				<div className="mb-4">
					<label htmlFor="Tel" className="text-sm mb-0 font-semibold">
						Store URL
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						{/* You can replace the src with the appropriate icon for phone number */}

						<img src="/images/link-square.png" className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-400" />
						<input
							type="tel"
							className="w-full px-4 ml-6 py-2 duration-500  border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="www.store.com"
							value={storeContact}
							onChange={(e) => setStoreContact(e.target.value)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
