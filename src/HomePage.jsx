/** @format */

import React from "react";
import { useContext } from "react";
import GlobalContext from "./components/AppComponents/Layout/GlobalContext";
import { MdOutlineSort } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export default function HomePage() {
	const { searchQuery, products } = useContext(GlobalContext);
	return (
		<div className="container mx-auto px-4 xl:px-2 py-10">
			<div className="w-full flex justify-between items-center mb-4">
				<p className="text-xl font-semibold">Hot Deals</p>
				<button className="text-base px-3 py-1 rounded bg-white border hover:bg-gray-100 cursor-pointer text-gray-500 hover flex items-center gap-4">
					<MdOutlineSort />
					Sort
				</button>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{products.map((item, index) => (
					<div
						key={index}
						className="bg-[#FAF7FF] transform transition-transform duration-300 hover:border-purple-700 hover:border-2 duration-500 overflow-hidden rounded border duration-1000 rounded-md"
					>
						<div className="relative overflow-hidden items-center justify-center flex w-full">
							<img
								alt={item.title}
								className="  h-[250px] object-cover"
								src={item.img}
              />
              <div className="text-purple-700 absolute top-2 text-sm border border-gray-100 left-2 bg-white rounded-lg px-3 py-1.5">
                Newest
              </div>
						</div>
						<div className="flex justify-between p-4 bg-white">
							<div className="">
								<p className="text-gray-color">{item.title}</p>
								<p className="text-gray-00 text-sm mt-3">Price</p>
								<p className="text-black   font-bold">{item.price}</p>
							</div>
							<div>
								<button className="p-4 text-white rounded-lg bg-[#8527CD]">
									<CiHeart />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

      <div className="py-14 w-full  ">
        <div className="relative ">
				<img src="./Images/frame_52.png" alt="" className=" w-full h-max " />

				<div className=" pr-4 absolute left-20 top-1/4 mt-4  w-[45%]">
					<p className="md:text-2xl xl:text-4xl text-[#8527CD]">
						Get 50% discount when you buy clothes from us today
					</p>
				</div></div>
			</div>

			{/* hot deals  */}
			<div className="w-full flex justify-between items-center mb-4">
				<p className="text-xl font-bold">Hot deals</p>
				<button className="text-sm px-3 py-1 rounded bg-blue-500 text-white">
					Sort
				</button>
      </div>
      


      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{products.map((item, index) => (
					<div
						key={index}
						className="bg-[#FAF7FF] transform transition-transform duration-300 hover:border-purple-700 hover:border-2 duration-500 overflow-hidden rounded border duration-1000 rounded-md"
					>
						<div className="relative overflow-hidden items-center justify-center flex w-full">
							<img
								alt={item.title}
								className="  h-[250px] object-cover"
								src={item.img}
              />
              <div className="text-purple-700 absolute top-2 text-sm border border-gray-100 left-2 bg-white rounded-lg px-3 py-1.5">
                Newest
              </div>
						</div>
						<div className="flex justify-between p-4 bg-white">
							<div className="">
								<p className="text-gray-color">{item.title}</p>
								<p className="text-gray-00 text-sm mt-3">Price</p>
								<p className="text-black   font-bold">{item.price}</p>
							</div>
							<div>
								<button className="p-4 text-white rounded-lg bg-[#8527CD]">
									<CiHeart />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>



			{/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
				{products.map((item, index) => (
					<div
						key={index}
						className="bg-[#FAF7FF] transform transition-transform duration-300 hover:scale-105 shadow-md rounded-md"
					>
						<div className="overflow-hidden items-center justify-center flex w-full">
							<img
								alt={item.title}
								className="  h-[250px] object-cover"
								src={item.img}
							/>
						</div>
						<div className="flex justify-between p-4 bg-white">
							<div className="">
								<b>{item.title}</b>
								<p className="text-gray-300 mt-3">price</p>
								<p className="text-black  mt-1 font-bold">{item.price}</p>
							</div>
							<div>
								<button className="p-4 text-white rounded-lg bg-[#8527CD]">
									<CiHeart />
								</button>
							</div>
						</div>
					</div>
				))}
			</div> */}
		</div>
	);
}
