/** @format */

import React from "react";

function LocationInfo() {
	return (
		<div className="px-2">
			{/* content */}
			<div className=" mt-10 mb-5">
				<h1 className="font-bold text-xl">Where Are You Located?</h1>
				<p className="text-gray-400 text-sm">
					Providing This Details Would Help Us Connect You With Customers Near
					You
				</p>
			</div>

			<div className=" flex flex-col gap-y-4 pt-10 text-gray-700">
				{/* country lbel and input */}
				<div className="mb-2">
					<label htmlFor="country" className="text-sm mb-0 font-semibold">
						Country
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						<select
							className="w-full px-4 py-2 duration-500 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm placeholder:text-gray-400"
							placeholder="Country"
						>
							<option value="" disabled selected>
								Country
							</option>
							<option value="USA">USA</option>
							<option value="Canada">Canada</option>
							<option value="UK">UK</option>
							<option value="Australia">Australia</option>
						</select>
					</div>
				</div>

				{/* state and city input side by side  */}
				<div className="flex gap-4">
					{/* state */}
					<div className="mb-2 flex-1">
						<label htmlFor="state" className="text-sm mb-0 font-semibold">
							State
						</label>
						<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
							<select
								className="w-full px-4 py-2 duration-500 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm placeholder:text-gray-400"
								placeholder="State"
							>
								<option value="" disabled selected>
									State
								</option>
								<option value="Lagos">Lagos</option>
								<option value="Abuja">Abuja</option>
								<option value="Kano">Kano</option>
								<option value="Rivers">Rivers</option>
							</select>
						</div>
					</div>

					{/* city */}
					<div className="mb-2 flex-1">
						<label htmlFor="city" className="text-sm mb-0 font-semibold">
							City
						</label>
						<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
							<select
								className="w-full px-4 py-2 duration-500 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm placeholder:text-gray-400"
								placeholder="City"
							>
								<option value="" disabled selected>
									City
								</option>
								<option value="Ikeja">Ikeja</option>
								<option value="Lekki">Lekki</option>
								<option value="Surulere">Surulere</option>
								<option value="Yaba">Yaba</option>
							</select>
						</div>
					</div>
				</div>

				{/* address input */}
				<div className="mb-2">
					<label htmlFor="address" className="text-sm mb-0 font-semibold">
						Address
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						<input
							type="text"
							className="w-full px-4 py-2 duration-500 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="Address"
						/>
					</div>
				</div>

				{/* institution near you input */}
				<div className="mb-2">
					<label htmlFor="institution" className="text-sm mb-0 font-semibold">
						Institution Near You
					</label>
					<div className="relative mt-1 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none duration-500 ">
						<select
							className="w-full px-4 py-2 duration-500 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
							placeholder="Institution Near You"
						>
							<option value="" disabled selected>
								Institution Near You
							</option>
							<option value="Institution1">Institution 1</option>
							<option value="Institution2">Institution 2</option>
							<option value="Institution3">Institution 3</option>
							<option value="Institution4">Institution 4</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LocationInfo;
