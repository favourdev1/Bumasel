// ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';

const ProductCard = ({ index, item }) => {
  return (
    <Link to={`/product/${index}`} key={index} className="w-full">
      <div
        key={index}
        className="bg-[#FAF7FF] transform transition-all  hover:ring-purple-700 hover:ring-2  overflow-hidden border hover:border-0 duration-500 rounded-xl max-h h-full"
      >
        <div className="relative overflow-hidden items-center justify-center flex w-full flex-1">
          <img
            alt={item.name}
            className="h-[250px] object-cover"
            src={item.image1}
          />
          <div className="text-purple-700 absolute top-2 text-xs border border-gray-100 left-2 bg-white rounded-full px-3 py-1.5">
           {item.brand}
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 p-4 bg-white h-max">
          <div className="flex flex-col h-full">
            <p
              className="text-gray-color text-sm"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: '1.25rem', // Adjust this value based on your font size
                minHeight:'3em', // 2 lines * line-height
                maxHeight: '3em', // 2 lines * line-height
              }}
            >
              {item.name}
            </p>
            <p className="text-black mt-auto font-bold">NGN{item.price}</p>
          </div>
          <div>
            <button className="p-2.5 text-white rounded-lg bg-[#8527CD]">
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;