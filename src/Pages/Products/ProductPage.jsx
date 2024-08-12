/** @format */

import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GlobalContext from "../../components/AppComponents/Layout/GlobalContext";
import { CiHeart } from "react-icons/ci";
import { AiTwotoneHeart } from "react-icons/ai";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { SiAdidas } from "react-icons/si";

import ProductModal from "./components/ProductModal";
import PoductSlider from "./components/ProductSlider";
import CommentCard from "./components/CommentCard";
import { Transition } from "@headlessui/react";
import ContactModal from "./components/ContactModal";
const ProductPage = () => {
	const { products } = useContext(GlobalContext);
	const { id } = useParams();

	// Find the card with the matching id
	const card = products[parseInt(id)];
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	// Initialize quantity state
	const [quantity, setQuantity] = useState(2); // Initial value set to 2
	// States for modal
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);
	const [activeSize, setActiveSize] = useState(1);
	const handleButtonClick = () => {
		setIsDialogOpen(true);
	};
	
	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};
	
	
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

	const [isExpanded, setIsExpanded] = useState(false);

	const toggleDescription = () => {
		setIsExpanded(!isExpanded);
	};

	const sampleComments = [
		{
			user: "JohnDoe",
			text: "This is an amazing design! The level of detail and the quality of the work are exceptional. I'm excited to use it in my project.",
			createdAt: "Aug 5, 2024",
			likes: 12,
			itemQualityRating: 5
		},
		{
			user: "JaneSmith",
			text: "I appreciate the clear instructions and the variety of file formats included. The design is perfect for my interior space.",
			createdAt: "Aug 4, 2024",
			likes: 8,
			itemQualityRating: 4
		},
		{
			user: "CraftyBuilder",
			text: "Excellent work! The digital files were easy to download and compatible with my CNC machine. Looking forward to more designs.",
			createdAt: "Aug 3, 2024",
			likes: 15,
			itemQualityRating: 5
		},
		{
			user: "DesignFanatic",
			text: "The parametric wavy design is unique and versatile. It was straightforward to assemble and cut with my laser machine.",
			createdAt: "Aug 2, 2024",
			likes: 5,
			itemQualityRating: 4
		},
		{
			user: "Woodworker123",
			text: "Great value for the price. The design files were well-organized, and the quality of the design is top-notch. Highly recommend!",
			createdAt: "Aug 1, 2024",
			likes: 20,
			itemQualityRating: 5
		}
	];

	return (
		<div className="py-5 mx-auto px-4 xl:px-2 max-w-7xl mt-20 md:mt-2">
			{/* Modal */}

			<ProductModal
				showModal={showModal}
				closeModal={closeModal}
				selectedImage={selectedImage}
			/>

			{/* Product Page */}

			<div className="pb-4 w-full text-sm ">
				<Link
					to={"/"}
					className="hover:text-purple-700 border border-transparent transition-all duration-500 hover:border-[#eee] hover:border hover:bg-purple-100 w-max pl-2 pr-4 rounded-xl py-2 flex items-center gap-4 text-xs"
				>
					<FaArrowLeft className="w-4 h-4" />
					<span>Go Back</span>
				</Link>
			</div>
			<div className="flex w-full lg:gap-20 gap-3 flex-col lg:flex-row">
				<div className="w-full lg:w-7/12">
					<div className="w-full overflow-hidden flex gap-y-3 flex-col lg:flex-col h-[95%]">
						<div
							className="border border-transparent w-full items-center justify-center flex  flex-col  bg-[#FAF7FF] rounded-xl h-full relative  hover:ring-2 hover:ring-purple-200 transition-all duration-500 overflow-hidden lg:h-[60vh]"
							style={{
								backgroundImage: `url(${card.img})`,
								backgroundSize: "cover",
								backgroundPosition: "center"
							}}
							onClick={() => openModal(card.img)}
						>
							<div className="px-3 flex items-center justify-between w-full absolute top-5 text-xs">
								<button className="lg:flex gap-2 bg-white rounded-full py-2.5 px-3 text-xs hidden border border-[#eee]">
									<FaStar className="w-4 h-4" /> Highest Rated
								</button>
								<button className=" lg:flex lg:flex gap-2 bg-white rounded-full py-2.5 px-3 text-xs hidden border border-[#eee] bg-white/90 hover:bg-purple-700 hover:text-white">
									<AiTwotoneHeart className="w-4 h-4" />
								</button>
							</div>
							{/* <img
                src={card.img}
                onClick={() => openModal(card.img)}
                alt=""
                className="object-contain lg:lg:h-[60vh] flex-1 w-full  "
              /> */}
						</div>
						<div className="flex flex-row lg:justify-between justify-end gap-2  lg:flex-row flex-row  lg:bg-white bg-[#FAF7FF]  lg:w-full w-full overflow-hidde p-1">
							{[card.img1, card.img2, card.img3, card.img4].map(
								(img, index) => (
									<div
										key={index}
										className="  border-2 border-transparent rounded-xl lg:bg-[#FAF7FF] flex justify-center items-center bg-white hover:ring-2 hover:ring-purple-200 transition-all duration-500 cursor-pointer w-full  min-h-[100px] max-h-[100px]"
										style={{
											backgroundImage: `url(${img})`,
											backgroundSize: "cover",
											backgroundPosition: "center"
										}}
										onClick={() => openModal(img)}
									></div>
								)
							)}
						</div>

						{/* comment sectiion */}

						<div className="divide-y divide-gray-200 mt-10">
							<h2 className="font-bold text-xl  mb-3">
								Reviews for this item{" "}
								<span className="px-3 py-1.5 h-8 text-sm font-light bg-gray-100 rounded-full">
									{sampleComments.length}
								</span>
							</h2>
							{sampleComments.map((comment, index) => (
								<CommentCard key={index} comment={comment} />
							))}
						</div>
					</div>
				</div>
				<div className="lg:w-5/12 w-full">
					<div className="w-full">
						<div className="flex py-2 justify-between">
							<div className="flex items-center">
								{" "}
								<img src={card.brandLogo} alt="" className="w-8 h-3" />
								<p className="font-bold">
									{card.brand}{" "}
									{/* <span className="font-light text-gray-500 text-xs">-Product brand</span> */}
								</p>
							</div>
							<div>
								<p className="font-semibold  text-xs  text-gray-800 ">
									<span className=" font-bold ">Product ID: </span>
									{card.productId}{" "}
								</p>
							</div>
						</div>
						<p className="text-2xl py-2 text-gray-800 font-bold">
							{" "}
							{card.title}
						</p>
						<div className="flex items-center gap-4 text-gray-700">
							<p>{card.productDescription}</p>
							<p className="flex gap-1 ">
								<FaStar className="w-5 h-5" />
								{card.productRating}
							</p>
						</div>
						<div className="py-3">
							<p className="font-bold text-xl"> {card.price}</p>
						</div>
						<div className="py-3">
							<p className="font-light text-gray-600 text-xs">colors:</p>
							<div className="gap-2 flex">
								<button className="w-[2rem] h-[2rem] rounded-xl border bg-[#8529CD] hover:bg-purple-700 transition-colors duration-300"></button>
								<button className="w-[2rem] h-[2rem] rounded-xl border bg-black hover:bg-gray-800 transition-colors duration-300"></button>
								<button className="w-[2rem] h-[2rem] rounded-xl border bg-[#ED9717] hover:bg-yellow-600 transition-colors duration-300"></button>
								<button className="w-[2rem] h-[2rem] rounded-xl border bg-white hover:bg-gray-200 transition-colors duration-300"></button>
								<button className="w-[2rem] h-[2rem] rounded-xl border bg-[#0866F3] hover:bg-blue-600 transition-colors duration-300"></button>
							</div>
						</div>
						<div className="py-3">
							<p className="font-light text-gray-600 text-xs">Sizes</p>
							<div className="gap-2 flex text-xs">
								<button
									className={`p-4 rounded-xl bg-[#FAF7FF] hover:bg-[#e1d5f5] transition-colors duration-300 border ${
										activeSize == 1 ? "bg-purple-700 text-white" : ""
									} `}
								>
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
									className="w-[2.5rem] text-xs h-[2rem] rounded-xl  border border-[#eee] bg-[#FAF7FF] text-center"
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
									<p className=" text-gray-600 text-xs">Store Location</p>
									<p>{card.storeLocation}</p>
								</div>
								<div>
									<p className=" text-gray-600 text-xs">Store Name</p>
									<p>{card.storeName}</p>
								</div>
							</div>
							{/* <div>
              <p className=" text-gray-600 text-xs">Store Contact</p>
              <p>{card.storeContact}</p>
            </div> */}
						</div>
						<div className="flex gap-6">
							<button className=" py-2 lg:hidden block">
								<CiHeart />
							</button>
							<button
								className="w-full text-center text-white bg-purple-700 rounded-full py-2.5 hover:shadow-purple-600 hover:bg-purple-600 hover:shadow-sm"
								style={{
									transition: "transform 0.5s"
								}}
								onMouseEnter={(e) => {
									e.target.style.transform =
										"scaleX(1.015) scaleY(1.035) perspective(1px)";
								}}
								onMouseLeave={(e) => {
									e.target.style.transform = "none";
								}}
								onClick={handleButtonClick}
							>
								Contact Vendor
							</button>

							<ContactModal isOpen={isDialogOpen} onClose={handleCloseDialog}>
								
							</ContactModal>
						</div>
						<p className="text-gray-600 py-2 text-xs">
							Goods especially edible products are adviced to be 1 - 3km away
							from present location
						</p>
					</div>

					{/* tabs */}
					<div className="py-5 ">
						<div className="py-4 prose">
							<p className="font-bold text-2xl  mt-5">Description</p>
							<div
								className={`overflow-hidden transition-all  flex flex-col duration-500 ease-in-out ${
									isExpanded ? "max-h-full" : "max-h-96"
								}`}
							>
								<h2 class="text-lg font-bold mb-2 text-gray-700">Highlights</h2>
								<ul class="list-disc pl-5 mb-4">
									<li>Designed by ParametricArtWood</li>
									<li>Digital download</li>
									<li>Digital file type(s): 4 ZIP</li>
									<li>Width: 391.5 centimeters</li>
									<li>Height: 121 centimeters</li>
									<li>Depth: 31 centimeters</li>
								</ul>

								<h3 class="text-md font-semibold mb-2">About this item</h3>
								<p class="mb-4">
									All of my items are DIGITAL projects. I don’t send any
									physical product. This is a parametric wavy design project
									which is for interior every place. There are notches on the
									backside of panels for assembly and it is ready for cut for
									all types of CNC machines or any wood cutting machine. I can
									make a discount for multiple purchases!
								</p>
								<p class="mb-4">
									This is a digital file for CNC machines, laser cutting
									machines, and jig-saw machines, so make sure there are no
									physical items sent. After completing the payment process, the
									door will open for the ZIP file you can download the project
									file from there. All formats are included in a single ZIP
									file. (DXF, DWG, PDF) Please make sure that your machine
									program is compatible with one of these file formats before
									purchasing the digital product.
								</p>
							</div>
							<div className="flex items-center justify-center py-10  bg-gradient-to-b from-white/60  via-white-/80 to-white/90 -translate-y-5 transform transition-all duration-500 ease-in-out">
								<button
									onClick={toggleDescription}
									className="hover:px-4 hover:py-2 transition-all duration-500 hover:bg-purple-100 hover:rounded-full text-purple-700 w-max mx-auto text-center text-sm"
								>
									{isExpanded ? "See Less" : "See Description"}
								</button>
							</div>
						</div>
					</div>
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
