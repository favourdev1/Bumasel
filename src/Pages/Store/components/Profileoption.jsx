/** @format */

import React from "react";

export const Profileoption = ({ isActive = false, text = "", image = "",description="",onClick }) => {
	return (
		<div className="w-full" onClick={onClick}>
			<div
				className={`py-2 flex gap-3 lg:flex-row flex-col items-start transition-all duration-500 hover:ring-1  ${
					isActive ? "bg-purple-700 text-white hover:text-purple-700 hover:bg-purple-200 hover:ring-purple-400" : ""
				} hover:bg-purple-100 rounded-xl cursor-pointer px-2 flex-1 hover:ring-purple-200`}
			>
				<div className="">
					<img src={image} alt="" className="rounded-full size-4 m-2 " />
				</div>
				<div className="flex flex-col">
									<p className={`text-sm font-bold pb-0 mb-0 ${isActive ? 'hover:text-purple-700' : ''}`}>
					  {text}
					</p>
					<p className={` text-xs ${isActive?'text-gray-200 hover:text-purple-500':'text-gray-400'}`}>
					{description}
					</p>
				</div>
			</div>
		</div>
	);
};
