import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaStar } from "react-icons/fa";
const ProductPage = () => {
  const { products } = useContext(GlobalContext);
  const { id } = useParams();

  // Find the card with the matching id
  const card = products[parseInt(id)];
  console.log(card);

  // Initialize quantity state
  const [quantity, setQuantity] = useState(2); // Initial value set to 2

  // Handle incrementing the quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Handle decrementing the quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Handle manually editing the quantity
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="py-10 mx-auto px-4 xl:px-2 container">
      <div className="p-5 w-full">
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
      </div>
      <div className="flex w-full gap-20">
        <div className="w-full lg:w-[40%] overflow-hidden items-center justify-center flex flex-col p-10 bg-[#FAF7FF] rounded-xl">
          <div className="flex justify-between w-full">
            <button className="flex gap-2 bg-white rounded-md p-3">
              <FaStar className="w-5 h-5" /> Highest Rated
            </button>
            <button>
              <CiHeart />
            </button>
          </div>
          <img
            src={"./images/NewSneakers.png"}
            alt=""
            className="object-contain h-[480px] object-center w-[285px] p-10"
          />
        </div>
        <div className="lg:w-[40%] w-full">
          <div className="flex py-2 justify-between">
            <div className="flex">
              {" "}
              <img src={card.brandLogo} alt="" className="w-24 h-10" />
              <p className="font-bold">
                {card.brand}{" "}
                <span className="font-thin text-gray-400">-Product brand</span>
              </p>
            </div>
            <div>
              <p className="font-bold ml-5">
                {card.productId}{" "}
                <span className="font-thin text-gray-400">-Product ID</span>
              </p>
            </div>
          </div>
          <p className="text-2xl py-2"> {card.title}</p>
          <div className="flex justify-between">
            <p>{card.productDescription}</p>
            <p className="flex gap-1">
              <FaStar className="w-5 h-5" />
              {card.productRating}
            </p>
          </div>
          <div className="py-3">
            <p className="font-thin text-gray-400">price:</p>
            <p className="font-bold"> {card.price}</p>
          </div>
          <div className="py-3">
            <p className="font-thin text-gray-400">colors:</p>
            <div className="gap-2 flex">
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#8529CD] hover:bg-purple-700 transition-colors duration-300"></button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-black hover:bg-gray-800 transition-colors duration-300"></button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#ED9717] hover:bg-yellow-600 transition-colors duration-300"></button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-white hover:bg-gray-200 transition-colors duration-300"></button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#0866F3] hover:bg-blue-600 transition-colors duration-300"></button>
            </div>
          </div>
          <div className="py-3">
            <p className="font-thin text-gray-400">Sizes</p>
            <div className="gap-2 flex">
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300">
                XXL
              </button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300">
                XL
              </button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300">
                L
              </button>
              <button className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300">
                M
              </button>
            </div>
          </div>
          <div className="py-3">
            <p className="font-thin text-gray-400">Quantity</p>
            <div className="gap-2 flex">
              <button
                className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300"
                onClick={incrementQuantity}
              >
                +
              </button>
              <input
                type="number"
                className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] text-center"
                value={quantity}
                onChange={handleQuantityChange}
              />
              <button
                className="w-[4rem] h-[4rem] rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300"
                onClick={decrementQuantity}
              >
                -
              </button>
            </div>
          </div>
          <div className=" py-3">
            <div className="flex justify-between py-2">
              <div>
                <p className=" text-gray-400">Store Location</p>
                <p>{card.storeLocation}</p>
              </div>
              <div>
                <p className=" text-gray-400">Store Name</p>
                <p>{card.storeName}</p>
              </div>
            </div>
            <div>
              <p className=" text-gray-400">Store Contact</p>
              <p>{card.storeContact}</p>
            </div>
          </div>
          <button className="w-full text-center text-white bg-purple-700 rounded-md py-2">
            Finsh Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
