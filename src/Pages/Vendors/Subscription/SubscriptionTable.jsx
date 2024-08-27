/** @format */

import React from "react";

const SubscriptionTable = () => {
	const subscriptions = [
		{
			shopMonth: "January",
			duration: "1 month",
			amount: "$100",
			lastPayment: "2023-09-01",
			expiryDate: "2023-10-01"
		},
		{
			shopMonth: "February",
			duration: "1 month",
			amount: "$100",
			lastPayment: "2023-10-01",
			expiryDate: "2023-11-01"
		}
		// Add more sample data as needed
	];
	return (
		<div className="w-full mt-5 p-5 py-8 rounded-xl border border-[#eee] min-h-[80vh] bg-white">
			{/* header */}
			<div className="flex items-center justify-between pl-4">
				<h4 className="font-bold text-lg">My Subscriptions</h4>
				<button className="bg-purple-100 text-purple-700 hover:bg-purple-700 duration-500 hover:text-white px-4 py-2 rounded-lg">
					Renew Payment
				</button>
			
			</div>

			<table className="min-w-full w-full mt-4 ">
				<thead>
					<tr className="text-left">
						<th className="px-4 py-2">S/N</th>
						<th className="px-4 py-2">Shop-Month</th>
						<th className="px-4 py-2">Duration</th>
						<th className="px-4 py-2">Amount</th>
						<th className="px-4 py-2">Last Payment</th>
						<th className="px-4 py-2">Expiry Date</th>
						
					</tr>
				</thead>
				<tbody>
					{subscriptions.map((subscription, index) => (
						<tr key={index}>
							{/* serial numbae */}
							<td className="border-y px-4 py-2">{index + 1}</td>

							<td className="border-y px-4 py-2">{subscription.shopMonth}</td>
							<td className="border-y px-4 py-2">{subscription.duration}</td>
							<td className="border-y px-4 py-2">{subscription.amount}</td>
							<td className="border-y px-4 py-2">{subscription.lastPayment}</td>
							<td className="border-y px-4 py-2">{subscription.expiryDate}</td>
							
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default SubscriptionTable;
