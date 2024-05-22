/** @format */

import React from "react";
import { useContext } from "react";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import { MdOutlineSort } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import ProductPage from "../Products/ProductPage";
import CategoriesFilter from "./components/CategoriesFilter";
import BrandFilter from "./components/BrandFilter";
import PriceFilter from "./components/PriceFilter";

function SearchPage() {
	const { searchQuery, products } = useContext(GlobalContext);
	return (
		<div className="container mx-auto px-4 xl:px-2 py-10 flex gap-x-8">
            <aside class="lg:col-span-3 md:w-96 mb-6 md:mb-0">
            <div className="w-full flex justify-between items-center mb-4">
					<p className="text-xl font-semibold">Filter Products</p>
					
				</div>
				<div
					class=""
					
				>
					<div class="offcanvas-header lg:hidden">
						<h5 class="offcanvas-title" id="offcanvasCategoryLabel">
							Filter
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body lg:pl-2 lg:pt-0">
						{/* <!-- Categories Section --> */}
						<CategoriesFilter />

						{/* <!-- Price Range Section --> */}
						<PriceFilter/>
						{/* !-- Brands Section --> */}
						<BrandFilter/>

						
					</div>
				</div>
			</aside>
			<div>
				<div className="w-full flex justify-between items-center mb-4">
					<p className="text-xl font-semibold">Hot Deals</p>
					<button className="text-base px-3 py-1 rounded bg-white border hover:bg-gray-100 cursor-pointer text-gray-500 hover flex items-center gap-4">
						<MdOutlineSort />
						Sort
					</button>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{products.map((item, index) => (
						<Link to={`/product/${index}`} key={index}>
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
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default SearchPage;
