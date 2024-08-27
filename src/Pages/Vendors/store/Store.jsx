/** @format */

import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { MdMoreVert } from "react-icons/md";
import DashboardContext from "../../../components/AppComponents/Layout/DashboardLayout/DashboardContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Store = () => {
    const navigate = useNavigate();
	const { searchQuery, products, Categories } = useContext(DashboardContext);
	const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
	const dropdownRefs = useRef([]);

	const toggleDropdown = (index) => {
		setOpenDropdownIndex(openDropdownIndex === index ? null : index);
	};

	const handleClickOutside = (event) => {
		if (
			dropdownRefs.current[openDropdownIndex] &&
			!dropdownRefs.current[openDropdownIndex].contains(event.target)
		) {
			setOpenDropdownIndex(null);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [openDropdownIndex]);

	const data = [
		{
			title: "Total Products",
			value: 100,
			metric: "+11.01%",
			isUp: true,
			colorClass: "text-white", // Tailwind CSS class for custom color
			metricColorClass: "text-white" // Metric color for index 0
		}
	];


	const handleEditClick = () => {
		navigate("/dashboard/store/sellers");
	};

	const handleDeleteClick = () => {
		// navigate('/delete');
	};

	const handleViewClick = () => {
		// navigate('/view');
	};

	const handleUploadProduct = () => {
		navigate("/dashboard/store/sellers");
	};

	return (
		<div className="min-h-screen mt-10 p-5 border border-[#eee] w-full flex gap-4 rounded-xl bg-white flex-1 flex-col">
			<div className="flex items-center justify-between">
				<h4 className="font-bold text-lg">Products</h4>
				<button
					className="bg-purple-700 text-white px-4 py-2 rounded-lg"
					onClick={handleUploadProduct}
				>
					Upload Product
				</button>
			</div>
			{/* grid cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 cursor-pointer">
				{data.map((item, index) => (
					<div
						key={index}
						className={`p-4 py-6 border border-[#eee] rounded-xl flex-1 duration-500 ${
							index === 0
								? "bg-purple-700 hover:bg-purple-600"
								: "hover:bg-[#eeeeee6c] bg-white"
						}`}
					>
						<p
							className={`font-medium ${
								index === 0 ? "text-white" : "text-gray-700"
							}`}
						>
							{item.title}
						</p>
						<p className={`text-3xl font-bold ${item.colorClass}`}>
							{item.value}
						</p>
						<p
							className={`text-xs flex items-center mt-4  ${item.metricColorClass}`}
						>
							{item.metric}
							<span
								className={`text-sm flex items-center ${
									index === 0
										? "text-white"
										: item.isUp
										? "text-purple-700"
										: "text-red-500"
								}`}
							>
								{item.isUp ? (
									<FaArrowUp className="ml-1" />
								) : (
									<FaArrowDown className="ml-1" />
								)}
							</span>
						</p>
					</div>
				))}
			</div>

			<div className="w-full mt-5">
				<table className="min-w-full w-full mt-4">
					<thead>
						<tr className="text-sm text-gray-400 bg-gray-50 rounded-xl">
							<th className="text-left py-2.5 px-4">Product ID</th>
							<th className="text-left py-2.5 px-4">Product Name</th>
							<th className="text-left py-2.5 px-4">Category</th>
							<th className="text-left py-2.5 px-4">Price</th>
							<th className="text-left py-2.5 px-4">Quantity</th>
							<th className="text-left py-2.5 px-4">Status</th>
							<th className="text-left py-2.5 px-4">Date</th>
							<th className="text-left py-2.5 px-4"></th>
						</tr>
					</thead>
					<tbody>
						{products.map((item, index) => {
							const isActive =
								item.status === "active" ||
								(item.status === undefined && Math.random() > 0.5);

							return (
								<tr key={index} className="text-sm text-gray-600">
									<td className="py-4 px-4">{item.productId}</td>
									<td className="py-4 px-4">{item.title}</td>
									<td className="py-4 px-4">
										<span className="rounded-full px-4 py-2.5 bg-gray-100 text-gray-600 text-xs">
											{Categories[item.categoryId]?.name || "Unknown Category"}
										</span>
									</td>
									<td className="py-4 px-4">{item.price}</td>
									<td className="py-4 px-4">{item.quantity ?? 5}</td>
									<td className="py-4 px-4 flex justify-center items-center">
										<span
											className={`rounded-full py-2 px-4 text-xs w-full flex-1 text-center font-semibold flex justify-center items-center gap-2 ${
												isActive
													? "bg-green-50 text-green-700"
													: "bg-red-50 text-red-500"
											}`}
										>
											<div
												className={`w-2 h-2 rounded-full ${
													isActive ? "bg-green-700" : "bg-red-500"
												}`}
											></div>
											{item.status ?? (isActive ? "active" : "inactive")}
										</span>
									</td>
									<td className="py-4 px-4">{item.date ?? "22 Jan 2022"}</td>
									<td className="py-4 px-4">
										<div
											className="relative"
											ref={(el) => (dropdownRefs.current[index] = el)}
										>
											<button
												className="bg-gray-50 text-gray-500 px-3 py-1 rounded-lg"
												onClick={() => toggleDropdown(index)}
											>
												<MdMoreVert className="size-5" />
											</button>
											{openDropdownIndex === index && (
												<div className="absolute top-0 right-0 bg-white shadow-md rounded-lg mt-2 w-36 py-2 z-20">
													<button
														className="w-full py-2 px-4 text-left hover:bg-gray-100"
														onClick={handleEditClick}
													>
														Edit
													</button>
													<button
														className="w-full py-2 px-4 text-left hover:bg-gray-100"
														onClick={handleDeleteClick}
													>
														Delete
													</button>
													<button
														className="w-full py-2 px-4 text-left hover:bg-gray-100"
														onClick={handleViewClick}
													>
														View
													</button>
												</div>
											)}
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Store;
