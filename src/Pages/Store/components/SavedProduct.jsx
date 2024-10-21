import React from 'react'
import { useContext } from "react";

import ProductCard from '../../../components/Home/component/ProductCard';
import GlobalContext from '../../../components/AppComponents/Layout/GlobalContext';

const SavedProduct = () => {
    const { //searchQuery,
        products,
        //Categories
    } = useContext(GlobalContext);
    return (
        <div>
            <h1 className='font-bold text-gray-950 text-xl'> Saved Product</h1>
            <p className='text-gray-400 pb-10'>Your Saved Items </p>

            {/* products  */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
				{products.map((item, index) => (
					 <ProductCard key={index} index={index} item={item} />
				))}
			</div>
        </div>
    )
}

export default SavedProduct
