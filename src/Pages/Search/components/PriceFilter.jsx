/** @format */
// fixe the range slider issues 
import React from "react";
import { useContext } from "react";

function PriceFilter() {
	return (
		<div className="w-full border rounded-lg bg-white mb-3 px-2 py-4">
			<div class="flex items-center justify-between">
				<p className="w-full  text-left  flex items-center font-semibold justify-between ">
					Price range
				</p>
				<p class="text-primary font-bold cursor-pointer" id="applyPricing">
					Apply
				</p>
			</div>
			<input
				type="range"
				name="pieces"
				id="inputPieces"
				multiple
				min="0"
				max="100"
			/>
			<span id="priceRange-value" class="text-xs"></span>
		</div>
	);
}

export default PriceFilter;
