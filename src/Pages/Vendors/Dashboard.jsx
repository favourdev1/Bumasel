/** @format */

import React from "react";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import { GoArrowRight } from "react-icons/go";
function Dashboard() {
	// make me data for dashboard cards
	const data = [
		{
			title: "Total Products",
			value: 100,
			metric: "+11.01%",
			isUp: true,
			colorClass: "text-white", // Tailwind CSS class for custom color
			metricColorClass: "text-white" // Metric color for index 0
		},
		{
			title: "Total Stores Reviews",
			value: 100,
			metric: "-5.23%",
			isUp: false,
			colorClass: "text-gray-700", // Tailwind CSS class for custom color
			metricColorClass: "text-gray-400" // Metric color for down
		},
		{
			title: "Total Call Requested",
			value: 100,
			metric: "+3.45%",
			isUp: true,
			colorClass: "text-gray-700", // Tailwind CSS class for custom color
			metricColorClass: "text-gray-400" // Metric color for up
		},
		{
			title: "Total Customers",
			value: 100,
			metric: "-2.78%",
			isUp: false,
			colorClass: "text-gray-700", // Tailwind CSS class for custom color
			metricColorClass: "text-gray-400" // Metric color for down
		}
	];

	const notifications = [
		{
			message: "Your order is on the way and will be delivered soon",
			timestamp: "Just Now"
		},
		{
			message: "Your package has been delivered",
			timestamp: "2 hours ago"
		}
		// Add more items as needed
	];
	const tableData = [
		{
			productId: "P001",
			productName: "Black Headphone",
			price: "N 2000",
			quantity: 200,
			status: "Active",
			date: "2023-10-01"
		},
		{
			productId: "P002",
			productName: "Wireless Mouse",
			price: "N 1500",
			quantity: 150,
			status: "Active",
			date: "2023-10-02"
		},
		{
			productId: "P003",
			productName: "Keyboard",
			price: "N 3000",
			quantity: 100,
			status: "Inactive",
			date: "2023-10-03"
		},
		{
			productId: "P001",
			productName: "Black Headphone",
			price: "N 2000",
			quantity: 200,
			status: "Active",
			date: "2023-10-01"
		},
		{
			productId: "P002",
			productName: "Wireless Mouse",
			price: "N 1500",
			quantity: 150,
			status: "Active",
			date: "2023-10-02"
		},
		{
			productId: "P003",
			productName: "Keyboard",
			price: "N 3000",
			quantity: 100,
			status: "Inactive",
			date: "2023-10-03"
		},
		{
			productId: "P001",
			productName: "Black Headphone",
			price: "N 2000",
			quantity: 200,
			status: "Active",
			date: "2023-10-01"
		},
		{
			productId: "P002",
			productName: "Wireless Mouse",
			price: "N 1500",
			quantity: 150,
			status: "Active",
			date: "2023-10-02"
		},
		{
			productId: "P003",
			productName: "Keyboard",
			price: "N 3000",
			quantity: 100,
			status: "Inactive",
			date: "2023-10-03"
		}
		// Add more items as needed
	];
	const products = [
		{ id: 1, name: "Female Sportswear", quantitySold: 201 },
		{ id: 2, name: "Female Sportswear", quantitySold: 201 },
		{ id: 3, name: "Female Sportswear", quantitySold: 201 },
		{ id: 3, name: "Female Sportswear", quantitySold: 201 }
	];

	return (
		<div className="min-h-screen py-10 w-full flex gap-4 bg-gray-50 flex-1 flex-col">
			{/* main section */}
			<div className=" h-max">
				<h1 className="font-bold text-2xl text-left text-purple-700 mb-5">
					Dashboard
				</h1>
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
			</div>

			<div className="flex ">
				{/* big section  */}
				<div className="flex-1 flex flex-col gap-2">
					<div className="flex-1 flex  gap-4 px-4 max-h-96">
						{/* call requests */}
						<div className="bg-white rounded-xl border border[#eee] p-4 mt-4 w-1/2">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-base font-semibold text-gray-700">
									Top Selling Products
								</h2>
								<span className="text-sm font-medium text-blue-500">
									This Month
								</span>
							</div>
							<ul className="text-sm divide-y divide-[#eee]">
								{products.map((product) => (
									<li key={product.id} className="flex items-center py-2 ">
										<img
											src="/Images/BlackHeadphone.png"
											alt={product.name}
											className="w-10 h-10 rounded-full border borer-[#eee] mr-3"
										/>
										<div className="flex-1">
											<span className="flex-grow font-bold text-gray-700">
												{product.name}
											</span>
											<div className="flex text-xs gap-2">
												<p className="font-medium text-gray-500">Quantity : </p>
												<p className="font-bold text-gray-500">
													{product.quantitySold}
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>

						{/* most clicks product  */}
						<div className="bg-white rounded-xl border border[#eee] p-4 mt-4 w-1/2">
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-base font-semibold text-gray-700">
									Most Clicked Produt
								</h2>
								<span className="text-sm font-medium text-blue-500">
									This Month
								</span>
							</div>
							<ul className="text-sm divide-y divide-[#eee]">
								{products.map((product) => (
									<li key={product.id} className="flex items-center py-2 ">
										<img
											src="/Images/BlackHeadphone.png"
											alt={product.name}
											className="w-10 h-10 rounded-full border borer-[#eee] mr-3"
										/>
										<div className="flex-1">
											<span className="flex-grow font-bold text-gray-700">
												{product.name}
											</span>
											<div className="flex text-xs gap-2">
												<p className="font-medium text-gray-500">Quantity : </p>
												<p className="font-bold text-gray-500">
													{product.quantitySold}
												</p>
											</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* table of products  */}
					<div className="p-4">
						<div className="rounded-xl bg-white border border-[#eee] p-4">
							<div className="flex items-center justify-between">
								<h1 className="font-bold text-base text-purple-700">
									Products
								</h1>
								<button className="text-gray-400 border border-[#eee]  focus:outline-none focus:ring-0 py-2.5 px-4 rounded-xl text-xs">
									This Month
								</button>
							</div>
							{/* table */}
							<div className="overflow-x-auto w-full">
								<table className="min-w-full w-full mt-4">
									<thead>
										<tr className="text-sm text-gray-400 bg-gray-50 rounded-xl">
											<th className="text-left py-2.5 px-4">Product ID</th>
											<th className="text-left py-2.5 px-4">Product Name</th>
											<th className="text-left py-2.5 px-4">Price</th>
											<th className="text-left py-2.5 px-4">Quantity</th>
											<th className="text-left py-2.5 px-4">Status</th>
											<th className="text-left py-2.5 px-4">Date</th>
										</tr>
									</thead>
									<tbody>
										{tableData.map((item, index) => (
											<tr key={index} className="text-sm text-gray-600">
												<td className="py-2 px-4">{item.productId}</td>
												<td className="py-2 px-4">{item.productName}</td>
												<td className="py-2 px-4">{item.price}</td>
												<td className="py-2 px-4">{item.quantity}</td>
												<td className="py-2 px-4">{item.status}</td>
												<td className="py-2 px-4">{item.date}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="w-full flex items-center justify-center py-3">
								{/* <a
									href="#"
									className="text-gray-300 hover:text-purple-700 duration-500 flex items-center gap-2 mx-auto text-center"
								>
									View all{" "}
									<span>
										<GoArrowRight className="size-5" />
									</span>
								</a> */}
							</div>
						</div>
					</div>
				</div>

				{/* notification section  */}
				<div className=" border-l pl-3 w-3/12 h-full">
					<div className="bg-white rounded-xl border border[#eee] p-4 ">
						<div className="flex items-center justify-between mb-3">
							<h1 className="font-bold text-base  text-left text-purple-700 ">
								Notifications
							</h1>

							<button className="text-gray-400  focus:outline-none focus:ring-0">
								View All
							</button>
						</div>

						{/* notification cards */}
						<div className="w-full ">
							{notifications.map((item, index) => (
								<div key={index} className="flex gap-4 mb-4">
									<div className="rounded-full size-1.5 bg-purple-700 mt-4"></div>
									<div className="text-xs w-full flex-1">
										<p className="text-sm text-gray-600 line-clamp-2 mr-4">
											{item.message}
										</p>
										<p className="font-semibold text-gray-300">
											{item.timestamp}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* products section */}
					<div className="bg-white rounded-xl border border[#eee] p-4 mt-4">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-base font-semibold text-gray-700">
								Top Selling Products
							</h2>
							<span className="text-sm font-medium text-blue-500">
								This Month
							</span>
						</div>
						<ul className="text-sm divide-y divide-[#eee]">
							{products.map((product) => (
								<li key={product.id} className="flex items-center py-2 ">
									<img
										src="/Images/BlackHeadphone.png"
										alt={product.name}
										className="w-10 h-10 rounded-full border borer-[#eee] mr-3"
									/>
									<div className="flex-1">
										<span className="flex-grow font-bold text-gray-700">
											{product.name}
										</span>
										<div className="flex text-xs gap-2">
											<p className="font-medium text-gray-500">Quantity : </p>
											<p className="font-bold text-gray-500">
												{product.quantitySold}
											</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
