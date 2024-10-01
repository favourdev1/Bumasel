/** @format */

import React, { useState } from "react";
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
import PaginationGroup from "./PaginationGroup";
import SortFilter from "./components/SortFilter";

function SearchPage() {
	const { searchQuery, products } = useContext(GlobalContext);
	const itemsPerPage = 5; // Number of items per page
	const [currentPage, setCurrentPage] = useState(1);

	// ==================== Pagination Logic  ====================
	// Calculate the data for the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

	const handleNext = () => {
		if (currentPage < Math.ceil(products.length / itemsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrev = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	// component returned data
	return (
		<div className="max-w-7xl mx-auto px-4 xl:px-2 py-10 flex gap-x-8 text-sm">
			<aside class="lg:col-span-3 md:w-96 mb-6 md:mb-0">
				<div className="w-full flex justify-between items-center mb-4">
					<p className="text-xl font-semibold">Filter Products</p>
				</div>
				<div class="">
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
						<PriceFilter />
						{/* !-- Brands Section --> */}
						<BrandFilter />
					</div>
				</div>
			</aside>
			<div className="w-full ">
				<div className="w-full flex justify-between items-center mb-4">
					<p className="text-xl font-semibold">Hot Deals</p>
					<SortFilter/>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
					{currentProducts.map((item, index) => (
						<ProductCard key={index} index={index} item={item} />
					))}
				</div>
				
				<PaginationGroup
					activePage={currentPage}
					onNext={handleNext}
					onPrev={handlePrev}
					setPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}

export default SearchPage;
