/** @format */

import React, { useContext } from "react";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import ProductForm from "./component/ProductForm";
function Sellerspage() {
    // const {products} = useContext(GlobalContext);

	return (
		<div className=" w-full mt-auto min-h-screen ">
			<h1 className="font-bold text-start mr-auto py-5 text-lg">Upload Products</h1>

			
			<div className="rounded-xl   ring-purple-100 ring-1 bg-purple-50 flex items-center justify-center w-full flex-col h-52 ">

				<p className="font-semibold text-purple-700 flex items-center gap-4">
				<img src="/Images/gallery-edit.png" alt="" />
					Add Cover Image
				</p>
				<p className="text-gray-400 text-xs ">
					
				
					Image should be less than 10MB and 2500 X 2500 pixels</p>
			</div>

			
			<div className="rounded-xl bg-purple-50 mt-5 px-14 py-2.5 w-max  flex items-center gap-4 font-semibold hover:ring-purple-100 hover:ring-1 duration-500 transition-all cursor-pointer">
				<img src="/Images/gallery-edit.png" alt="" className="size-4" />
				<p className="text-purple-700 text-sm ">Add Product Images</p>
			</div>
			

			<ProductForm/>
			
		</div>
	);
}

export default Sellerspage;
