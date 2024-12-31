/** @format */

import React, { useState } from "react";

const ProductForm = () => {
	const [selectedSizes, setSelectedSizes] = useState([]);
	const sizes = ["XXL", "XL", "L", "M", "S"];

	const toggleSize = (size) => {
		setSelectedSizes((prevSelectedSizes) =>
			prevSelectedSizes.includes(size)
				? prevSelectedSizes.filter((s) => s !== size)
				: [...prevSelectedSizes, size]
		);
	};

	const [selectedColors, setSelectedColors] = useState([]);
	const colors = [
		{ name: "red", class: "bg-red-500" },
		{ name: "blue", class: "bg-blue-500" },
		{ name: "green", class: "bg-green-500" }
		// Add more color options here
	];

	const toggleColor = (color) => {
		setSelectedColors((prevSelectedColors) =>
			prevSelectedColors.includes(color)
				? prevSelectedColors.filter((c) => c !== color)
				: [...prevSelectedColors, color]
		);
	};

	return (
		<div className="py-4 transition-all duration-300 text-sm mt-5">
			<form>
				{/* Product Name */}
				<div className="flex items-center gap-4">
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="productName"
						>
							Product Name
						</label>
						<input
							type="text"
							id="productName"
							placeholder="Fema port Wear"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-purple-700"
						/>
					</div>

					{/* Product ID */}
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="productId"
						>
							Product ID
						</label>
						<input
							type="text"
							id="productId"
							placeholder="Product ID Enters Here"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-purple-700"
						/>
					</div>
				</div>

				{/* Product Category */}
				<div className="flex items-center gap-4">
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="productCategory"
						>
							Product Category
						</label>
						<select
							id="productCategory"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-purple-700"
						>
							<option>Select From Our Options</option>
							{/* Add more options here */}
						</select>
					</div>

					{/* Product Type */}
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="productType"
						>
							Product Type
						</label>
						<input
							type="text"
							id="productType"
							placeholder="Edible Good"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-purple-700"
						/>
					</div>
				</div>
				<div className="flex items-center gap-4">
					{/* Product Brand */}
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="productBrand"
						>
							Product Brand
						</label>
						<input
							type="text"
							id="productBrand"
							placeholder="What Brand Is This Product"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-purple-700"
						/>
					</div>

					{/* Price For Product */}
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="productPrice"
						>
							Price For Product
						</label>
						<input
							type="text"
							id="productPrice"
							placeholder="How Much Does It Cost"
							className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-0 focus:ring-purple-700"
						/>
					</div>
				</div>

				<div className="flex items-center gap-4">
					{/* Available Colours */}
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="availableColours"
						>
							Available Colours
						</label>
						{/* Placeholder for color selection, could be color swatches */}
						<div id="availableColours" className="flex space-x-2">
							{colors.map((color) => (
								<div
									key={color.name}
									className={`w-7 h-7 rounded-lg cursor-pointer ${
										color.class
									} ${
										selectedColors.includes(color.name)
											? "ring-2 ring-offset-2 ring-purple-700"
											: ""
									}`}
									onClick={() => toggleColor(color.name)}
								></div>
							))}
						</div>
					</div>

					{/* Available Sizes */}
					<div className="mb-4 flex-1">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="availableSizes"
						>
							Available Sizes
						</label>
						<div className="flex items-center gap-4 w-1/2">
							{/* <div className="rounded-3xl bg-purple-500 text-purple-700 flex-1 font-semibold py-3"></div> */}
							{sizes.map((size) => (
								<div
									key={size}
									className={`rounded-xl bg-purple-100 text-purple-700  p-3 flex-1 text-center cursor-pointer font-bold text-xs duration-100 ${
										selectedSizes.includes(size)
											? "ring ring-2  ring-purple-600   "
											: ""
									}`}
									onClick={() => toggleSize(size)}
								>
									{size}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Submit Button */}
				<button
					type="submit"
					className="w-full bg-purple-700 text-white  rounded-lg hover:bg-purple-800 py-2.5 font-medium mt-8 uppercase"
				>
					Upload
				</button>
			</form>
		</div>
	);
};

export default ProductForm;
