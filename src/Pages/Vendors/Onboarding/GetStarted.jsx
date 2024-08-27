/** @format */

import React, { useState } from "react";

const GetStarted = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleClick = (option) => {
		setSelectedOption(option);
	};

	const [progress, setProgress] = useState(1);

	const handleProgressClick = (step) => {
		setProgress(step);
	};
	return (
		<div className="bg-gray-50 flex items-center justify-center w-screen h-screen">
			<div className="max-w-2xl w-full  bg-white shadow-sm rounded-xl border border-[#eee] min-h-[80vh] p-10 flex flex-col">
				<div className="flex-1">
					{/* progress section  */}
					<div className=" transition-all w-full flex flex-col gap-y-4">
						<div className="text-sm text-gray-400">Step 1 of 4</div>
						{/* Progress indicators */}
						<div className="flex items-center gap-2">
							<div
								className={`flex-1 h-2.5 rounded-full animate-pulse ${
									progress >= 1 ? "bg-purple-700" : "bg-gray-100"
								}`}
								onClick={() => handleProgressClick(1)}
							></div>
							<div
								className={`flex-1 h-2.5 rounded-full animate-pulse ${
									progress >= 2 ? "bg-purple-700" : "bg-gray-100 "
								}`}
								onClick={() => handleProgressClick(2)}
							></div>
							<div
								className={`flex-1 h-2.5 rounded-full animate-pulse ${
									progress >= 3 ? "bg-purple-700" : "bg-gray-100 "
								}`}
								onClick={() => handleProgressClick(3)}
							></div>
						</div>
					</div>

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
									selectedOption === "services"
										? "bg-purple-700"
										: "bg-purple-100"
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

				{/* Next and Previous buttons */}
				<div className="flex items-center justify-end mt-4 gap-4 text-sm">
					<button
						className=" text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 hover:border-gray-100 duration-300"
						onClick={() => handleProgressClick(progress - 1)}
						disabled={progress <= 0}
					>
						Prev
					</button>
					<button
						className="bg-purple-700 animate-pulse text-white px-8 py-2 rounded-md hover:bg-purple-600 duration-300"
						onClick={() => handleProgressClick(progress + 1)}
						disabled={progress >= 3}
					>
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
