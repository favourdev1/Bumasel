/** @format */

import React from "react";

const SellType = ({ handleClick, selectedOption }) => {
	return (
		<div>
			{/* content */}
			<div className=" mt-10 mb-5">
				<h1 className="font-bold text-xl">What do you sell?</h1>
				<p className="text-gray-400 text-sm">
					Start by selecting the type of product you sell
				</p>
			</div>
			<div className="w-3/4 flex flex-col gap-y-4">
				{/* options */}
				<div
					className={`rounded-xl border hover:animate-pulse ${
						selectedOption === "goods"
							? "border-purple-500 bg-purple-50"
							: "border-[#eee]"
					} flex items-center p-4 gap-4 hover:bg-purple-50 duration-500 cursor-pointer`}
					onClick={() => handleClick("goods")}
				>
					<div
						className={`rounded-lg duration-500 border ${
							selectedOption === "goods" ? "bg-purple-700" : "bg-purple-100"
						} "rounded-md  h-5 w-5`}
					></div>
					<div className="flex-1">
						<h1 className="font-semibold">Goods </h1>
						<p className="text-gray-400 text-sm">
							Physical Product I Shopped Myself
						</p>
					</div>
					<img src="/images/bag-2.png" alt="" />
				</div>

				{/* options */}
				<div
					className={`rounded-xl border ${
						selectedOption === "services"
							? "border-purple-500 bg-purple-50"
							: "border-[#eee]"
					} flex items-center p-4 gap-4 hover:animate-pulse hover:bg-purple-50 duration-500 cursor-pointer`}
					onClick={() => handleClick("services")}
				>
					<div
						className={`rounded-lg duration-500 border ${
							selectedOption === "services" ? "bg-purple-700" : "bg-purple-100"
						} "rounded-md  h-5 w-5`}
					></div>
					<div className="flex-1">
						<h1 className="font-semibold">Services </h1>
						<p className="text-gray-400 text-sm">
							Cleaning, Make Up, Barbing, Repair etc
						</p>
					</div>
					<img src="/images/weight.png" alt="" />
				</div>
			</div>
		</div>
	);
};

export default SellType;
