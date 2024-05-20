import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import { CiHeart } from "react-icons/ci";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { SiAdidas } from "react-icons/si";

import ProductModal from "./components/ProductModal";
import PoductSlider from "./components/ProductSlider";
import { Transition } from "@headlessui/react";
const ProductPage = () => {
  const { products } = useContext(GlobalContext);
  const { id } = useParams();

  // Find the card with the matching id
  const card = products[parseInt(id)];

  // Initialize quantity state
  const [quantity, setQuantity] = useState(2); // Initial value set to 2
  // States for modal
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
const [activeSize, setActiveSize] = useState(1);
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
  // Function to open modal and set selected image
  const openModal = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div className="py-5 mx-auto px-4 xl:px-2 container mt-20 md:mt-2">
         {/* Modal */}
  

      <ProductModal showModal={showModal} closeModal={closeModal} selectedImage={selectedImage} />



      {/* Product Page */}

      <div className="pb-4 w-full ">
        <Link to={"/"}  className="hover:text-purple-700 border border-transparent transition-all duration-500 hover:border-[#eee] hover:border hover:bg-purple-100 w-max pl-2 pr-4 rounded py-2 flex items-center gap-4 text-xs">
          <FaArrowLeft className="w-4 h-4"/>
          <span>Go Back</span>
        </Link>
      </div>
      <div className="flex w-full lg:gap-20 gap-5 flex-col lg:flex-row">
        <div className="w-full lg:w-[35%]">
          <div className="w-full overflow-hidden flex gap-y-3 flex-col lg:flex-col h-[95%]">
            <div className="border w-full items-center justify-center flex  flex-col  bg-[#FAF7FF] rounded-xl h-full relative">
              <div className="px-3 flex items-center justify-between w-full absolute top-5 text-sm">
                <button className="lg:flex gap-2 bg-white rounded-md py-1.5 px-3 text-xs hidden border border-[#eee]">
                  <FaStar className="w-4 h-4" /> Highest Rated
                </button>
                <button className=" lg:flex lg:flex gap-2 bg-white rounded-md py-1.5 px-3 text-xs hidden border border-[#eee] bg-white/90 hover:bg-purple-700 hover:text-white">

            
                <AiTwotoneHeart className="w-4 h-4" />
                </button>
              </div>
              <img
                src={card.img}
                onClick={() => openModal(card.img)}
                alt=""
                className="object-contain lg:h-[90%] min-h-[300px]   p-10"
              />
            </div>
            <div className="flex flex-row lg:justify-between justify-end gap-2  lg:flex-row flex-row  lg:bg-white bg-[#FAF7FF]  lg:w-full w-full overflow-hidden">
              {[card.img1, card.img2, card.img3, card.img4].map(
                (img, index) => (
                  <div
                    key={index}
                    className="  border rounded-xl lg:bg-[#FAF7FF] flex justify-center items-center bg-white hover:border-2 hover:border-purple-700/50 transition-colors duration-300 cursor-pointer w-full"
                    onClick={() => openModal(img)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="object-cover  min-h-[100px] max-h-[100px]
                       flex-1 h-full object-center "
                    />
                  </div>
                )
              )}
            </div>
          </div>
          
        </div>
        <div className="lg:w-[40%] w-full">
          <div className="flex py-2 justify-between">
            <div className="flex items-center">
              {" "}
              <img src={card.brandLogo} alt="" className="w-8 h-3" />
              <p className="font-bold">
                {card.brand}{" "}
                {/* <span className="font-light text-gray-500 text-sm">-Product brand</span> */}
              </p>
            </div>
            <div>
              <p className="font-semibold  text-sm  text-gray-800 ">
                <span className=" font-bold">Product ID: </span>
                {card.productId}{" "}
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
            <p className="font-light text-gray-600 text-sm">price:</p>
            <p className="font-bold text-xl"> {card.price}</p>
          </div>
          <div className="py-3">
            <p className="font-light text-gray-600 text-sm">colors:</p>
            <div className="gap-2 flex">
              <button className="w-[2rem] h-[2rem] rounded-xl border bg-[#8529CD] hover:bg-purple-700 transition-colors duration-300"></button>
              <button className="w-[2rem] h-[2rem] rounded-xl border bg-black hover:bg-gray-800 transition-colors duration-300"></button>
              <button className="w-[2rem] h-[2rem] rounded-xl border bg-[#ED9717] hover:bg-yellow-600 transition-colors duration-300"></button>
              <button className="w-[2rem] h-[2rem] rounded-xl border bg-white hover:bg-gray-200 transition-colors duration-300"></button>
              <button className="w-[2rem] h-[2rem] rounded-xl border bg-[#0866F3] hover:bg-blue-600 transition-colors duration-300"></button>
            </div>
          </div>
          <div className="py-3">
            <p className="font-light text-gray-600 text-sm">Sizes</p>
            <div className="gap-2 flex text-sm">
              <button className={`p-4 rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300 border ${activeSize==1? 'bg-purple-700 text-white':''} `}>
                XXL
              </button>
              <button className="p-4 rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300 border ">
                XL
              </button>
              <button className="p-4 rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300 border ">
                L
              </button>
              <button className="p-4 rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300 border ">
                M
              </button>
            </div>
          </div>
          <div className="py-3">
            <p className="font-light text-gray-600">Quantity</p>
            <div className="gap-2 flex">
            <button
                className="w-[2rem] h-[2rem] rounded-xl border border-[#eee] bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300"
                onClick={decrementQuantity}
              >
                -
              </button>
              <input
                type="text"
                disabled
                className="w-[2.5rem] text-sm h-[2rem] rounded-xl  border border-[#eee] bg-[#FAF7FF] text-center"
                value={quantity}
                onChange={handleQuantityChange}
              />
               <button
                className="w-[2rem] h-[2rem] rounded-xl border border-[#eee] bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300"
                onClick={incrementQuantity}
              >
                +
              </button>
             
            </div>
          </div>
          <div className=" py-3">
            <div className="flex justify-between py-2">
              <div>
                <p className=" text-gray-600 text-sm">Store Location</p>
                <p>{card.storeLocation}</p>
              </div>
              <div>
                <p className=" text-gray-600 text-sm">Store Name</p>
                <p>{card.storeName}</p>
              </div>
            </div>
            <div>
              <p className=" text-gray-600 text-sm">Store Contact</p>
              <p>{card.storeContact}</p>
            </div>
          </div>
          <div className="flex gap-6">
            <button className=" py-2 lg:hidden block">
              <CiHeart />
            </button>
            <button className="w-full text-center text-white bg-purple-700 rounded-md py-2">
              Finsh Order
            </button>

          </div>
            <p className="text-gray-600 py-2 text-sm">
            Goods especially edible products are adviced to be 1 - 3km away from
            present location
          </p>
        </div>
      </div>
   
      
      {/* Similar products  */}
      <div className="pt-32">
        <p className="font-bold text-lg ">Similar Products You May Like</p>
        <PoductSlider products={products} />
   
      </div>


      
      {/*  */}


    </div>
  );
};

export default ProductPage;
