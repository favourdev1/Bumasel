import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaStar } from "react-icons/fa";
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
    <div className="py-10 mx-auto px-4 xl:px-2 container">
      <div className="p-5 w-full">
        <Link to={"/"}>
          <FaArrowLeft />
        </Link>
      </div>
      <div className="flex w-full lg:gap-20 gap-5 flex-col lg:flex-row">
        <div className="w-full lg:w-[40%]">
          <div className="w-full overflow-hidden flex flex-row lg:flex-col">
            <div className="w-full items-center justify-center flex flex-col p-10 bg-[#FAF7FF] rounded-xl">
              <div className="flex justify-between w-full">
                <button className="lg:flex gap-2 bg-white rounded-md p-3 hidden">
                  <FaStar className="w-5 h-5" /> Highest Rated
                </button>
                <button className="hidden lg:flex">
                  <CiHeart />
                </button>
              </div>
              <img
                src={card.img}
                alt=""
                className="object-contain lg:h-[480px] h-[300px] object-center w-[285px] p-10"
              />
            </div>
            <div className="flex lg:justify-between justify-end gap-4 lg:flex-row flex-col pt-6 lg:bg-white bg-[#FAF7FF]  lg:w-full w-[6rem] overflow-hidden">
              {[card.img1, card.img2, card.img3, card.img4].map(
                (img, index) => (
                  <div
                    key={index}
                    className="w-[6rem] h-[6rem] rounded-xl lg:bg-[#FAF7FF] flex justify-center items-center bg-white hover:bg-[#e1d5f5] transition-colors duration-300 cursor-pointer"
                    onClick={() => openModal(img)}
                  >
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-{5rem} h-full object-center "
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <p className="text-gray-400 pt-4">
            Goods especially edible products are adviced to be 1 - 3km away from
            present location
          </p>
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
          <div className="flex gap-6">
            <button className=" py-2 lg:hidden block">
              <CiHeart />
            </button>
            <button className="w-full text-center text-white bg-purple-700 rounded-md py-2">
              Finsh Order
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Transition
        show={showModal}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        enter="transition ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as="div"
            className="fixed inset-0  bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-xl bg-white/10 "
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onClick={closeModal}
          />
          <Transition.Child
            as="div"
            className="bg-white rounded-lg overflow-hidden shadow-xl z-10 max-w-lg w-full "
            enter="transform transition ease-out duration-300 sm:duration-500"
            enterFrom="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            enterTo="translate-y-0 opacity-100 sm:scale-100"
            leave="transform transition ease-in duration-200 sm:duration-300"
            leaveFrom="translate-y-0 opacity-100 sm:scale-100"
            leaveTo="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          >
            <img
              src={selectedImage}
              alt=""
              className="w-full h-[60%] object-contain"
            />
          </Transition.Child>
        </div>
      </Transition>
    </div>
  );
};

export default ProductPage;
