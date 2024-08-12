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
import ProductCard from "../../components/Home/component/ProductCard";

function SearchPage() {
	const { searchQuery, products } = useContext(GlobalContext);
	return (
		<div className="max-w-7xl mx-auto px-4 xl:px-2 py-10 flex gap-x-8 text-sm">
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
						 <ProductCard key={index} index={index} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default SearchPage;
