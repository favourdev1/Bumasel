/** @format */

import React from "react";
import { useContext } from "react";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import { MdOutlineSort } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import ProductPage from "../Products/ProductPage";
import CategoriesFilter from "./components/CategoriesFilter";

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
						<div>
							<div class="mb-8 border p-4 rounded w-full">
								<div class="flex items-center justify-between">
									<h5 class="mb-3">Price range</h5>
									<p
										class="text-primary font-bold cursor-pointer"
										id="applyPricing"
									>
										Apply
									</p>
								</div>
								<input
									type="range"
									name="pieces"
									id="inputPieces"
									multiple
									min="0"
									max="100"
								/>
								<span id="priceRange-value" class="text-sm"></span>
							</div>
						</div>
						{/* !-- Brands Section --> */}
						<div class="mb-8 border rounded accordion" id="brandsAccordion">
							<h5 class="mb-3 font-bold">
								<button
									class="accordion-button font-bold"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#brandsCollapse"
									aria-expanded="true"
									aria-controls="brandsCollapse"
								>
									Brands
								</button>
							</h5>
							<div
								id="brandsCollapse"
								class="accordion-collapse collapse show"
								aria-labelledby="brandsHeading"
								data-bs-parent="#brandsAccordion"
							>
								<div class="accordion-body">
									<div class="form-check mb-2">
										<input
											class="form-check-input brand"
											type="checkbox"
											value="Brand 1"
											id="Brand1"
											checked
										/>
										<label class="form-check-label" for="Brand1">
											Brand 1
										</label>
									</div>
									<div class="form-check mb-2">
										<input
											class="form-check-input brand"
											type="checkbox"
											value="Brand 2"
											id="Brand2"
										/>
										<label class="form-check-label" for="Brand2">
											Brand 2
										</label>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- Deals Section --> */}
						<div class="mb-8 border p-4 rounded w-full">
							<h5 class="mb-3">Deals</h5>
							<div class="form-check mb-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="shipping"
								/>
								<label class="form-check-label" for="shipping">
									Shipping
								</label>
							</div>
							<div class="form-check mb-2">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id="cash_on_delivery"
								/>
								<label class="form-check-label" for="cash_on_delivery">
									Cash On Delivery
								</label>
							</div>
						</div>

						{/* <!-- Rating Section --> */}
						<div class="accordion" id="ratingAccordion">
							<div class="accordion-item">
								<h2 class="accordion-header" id="ratingHeading">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#ratingCollapse"
										aria-expanded="true"
										aria-controls="ratingCollapse"
									>
										Rating
									</button>
								</h2>
								<div
									id="ratingCollapse"
									class="accordion-collapse collapse show"
									aria-labelledby="ratingHeading"
									data-bs-parent="#ratingAccordion"
								>
									<div class="accordion-body">
										<div class="form-check mb-2">
											<input
												class="form-check-input"
												type="checkbox"
												value=""
												id="ratingFive"
											/>
											<label class="form-check-label" for="ratingFive">
												<i class="bi bi-star-fill text-yellow-400"></i>
												<i class="bi bi-star-fill text-yellow-400"></i>
												<i class="bi bi-star-fill text-yellow-400"></i>
												<i class="bi bi-star-fill text-yellow-400"></i>
												<i class="bi bi-star-fill text-yellow-400"></i>
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
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
