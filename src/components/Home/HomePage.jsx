/** @format */

import React from "react";
import { useContext } from "react";
import GlobalContext from "../AppComponents/Layout/GlobalContext";
import { MdOutlineSort } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Category from "./component/Category";
import ProductCard from "./component/ProductCard"
export default function HomePage() {
	const { searchQuery, products, Categories } = useContext(GlobalContext);
	return (
		<div className="max-w-7xl mx-auto px-4 xl:px-2 py-10">
			<div className="w-full flex flex-col justify-between gap-4 mb-4">
				<h4 className="font-medium text-xl">Select Your Institution</h4>
				<div className="flex items-center gap-6 text-sm text-gray-700 w-full md:w-1/2">
					<select className="border border-gray-300 focus:outline-none rounded-lg px-3 py-1.5 pr-4 flex-1">
						<option value="">Select State</option>
						<option value="state1">State 1</option>
						<option value="state2">State 2</option>
						<option value="state3">State 3</option>
					</select>

					<select className="border border-gray-300 rounded-lg  focus:outline-none  px-3 py-1.5 ml-4 flex-1">
						<option value="">Select Institution</option>
						<option value="institution1">Institution 1</option>
						<option value="institution2">Institution 2</option>
						<option value="institution3">Institution 3</option>
					</select>
				</div>
			</div>

			{/* categories */}
			<div class="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-10">
				{Categories.map((category) => (
					<div key={category.name}>
						<Category
							categoryName={category.name}
							categoryImage={category.image}
						/>
					</div>
				))}
			</div>

			<div className="w-full flex justify-between items-center mb-4">
				<p className="text-xl font-semibold">Hottest Deals</p>
				{/* <button className="text-base px-3 py-1 rounded bg-white border hover:bg-gray-100 cursor-pointer text-gray-500 hover flex items-center gap-4">
					<MdOutlineSort />
					Sort
				</button> */}
			</div> 
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{products.map((item, index) => (
					 <ProductCard key={index} index={index} item={item} />
				))}
			</div>

			<div className="py-14 w-full  ">
				<div className="relative ">
					<img src="./images/Frame_52.png" alt="" className=" w-full h-max " />

					<div className=" pr-4 absolute left-20 top-1/4 mt-4  w-[45%]">
						<p className="md:text-2xl xl:text-4xl text-[#8527CD]">
							Get 50% discount when you buy clothes from us today
						</p>
					</div>
				</div>
			</div>

			{/* categories */}
			<div class="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 my-10">
				{Categories.map((category) => (
					<div key={category.name}>
						<Category
							categoryName={category.name}
							categoryImage={category.image}
						/>
					</div>
				))}
			</div>
			{/* hot deals  */}
			<div className="w-full flex justify-between items-center mb-4">
				<p className="text-xl font-bold">Cheapest deals</p>
				{/* <button className="text-xs px-3 py-1 rounded bg-blue-500 text-white">
					Sort
				</button> */}
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
				{products.map((item, index) => (
					 <ProductCard key={index} index={index} item={item} />
				))}
			</div>

			{/*  */}
		</div>
	);
}
