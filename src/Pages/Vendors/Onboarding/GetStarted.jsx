/** @format */

import React, { useState } from "react";
import SellType from "./components/SellType";
import StoreInfo from "./components/StoreInfo";
import LocationInfo from "./components/LocationInfo";
import { IoArrowBack } from "react-icons/io5";
const GetStarted = () => {
	const [selectedOption, setSelectedOption] = useState('goods');

	const handleClick = (option) => {
		setSelectedOption(option);
	};

	const [progress, setProgress] = useState(1);

	const handleProgressClick = (step) => {
		setProgress(step);
	};
	return (
		<div className="bg-gray-50 flex items-center justify-center w-screen h-screen">
			<div className="max-w-2xl w-full transition-all duration-500 bg-white shadow-sm rounded-xl border border-[#eee] overflow-hidden p-10 flex flex-col  min-h-[70vh] max-h-[90vh]">
				<div className="flex-1">
					{/* progress section  */}
					<div className=" transition-all w-full flex flex-col gap-y-4">
						<div className="text-sm text-gray-400">Step {progress} of 3</div>
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

					<div className=" min-h-[70vh] overflow-y-scroll">
						{/* pages */}
						{progress === 1 ? (
							<SellType
								handleClick={handleClick}
								selectedOption={selectedOption}
							/>
						) : progress === 2 ? (
							<StoreInfo />
						) : progress === 3 ? (
							<LocationInfo />
						) : null}
					</div>
				</div>
				{/* Next and Previous buttons */}
				<div className="flex items-center justify-between mt-4 gap-4 text-sm transition-all ">
					<div className="flex items-center gap-2 text-sm transition-all text-gray-700  py-2  hover:text-gray-700 hover:border-b-2 border-spacing-2 hover:border-gray-300 pb-0 ">
						<IoArrowBack className="size-5 " />
						<button
							className=" "
							onClick={() => handleProgressClick(progress - 1)}
							disabled={progress <= 1}
						>
							Prev
						</button>
					</div>
					<button
						className="bg-purple-700 transition-all   text-white px-8 py-2 rounded-md hover:bg-purple-600 duration-500"
						onClick={() => handleProgressClick(progress + 1)}
						disabled={progress >= 3}
					>
						{progress === 3 ? "Create Account" : "Next"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
