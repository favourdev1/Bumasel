/** @format */

import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import Switch from "react-switch";
import { Link } from "react-router-dom";
import {
	FaImage,
	FaTrash,
	FaQuestionCircle,
	FaInfoCircle,
	FaBriefcase,
	FaLocationArrow,
	FaAngleRight,
	FaArrowLeft
} from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineBug, AiTwotoneMail } from "react-icons/ai";
import { Profileoption } from "./components/Profileoption";
import { ProfileComponent } from "./components/ProfileComponent";
import ReviewComponent from "./components/ReviewComponent";
import SavedProduct from "./components/SavedProduct";

function ProfileSection({ userProfile }) {
	const [emailChecked, setEmailChecked] = useState(false);
	const [newsletterChecked, setNewsletterChecked] = useState(false);
	const [formData, setFormData] = useState(userProfile);
	
		const [stateInput, setStateInput] = useState("");
		const [cityInput, setCityInput] = useState("");
	const [editSectionOpen, setEditSectionOpen] = useState(false); // State to track if edit section is open on mobile

	// Handler for email notification switch
	const handleChangeEmail = (checked) => {
		setEmailChecked(checked);
	};

	// Handler for newsletter alert switch
	const handleChangeNewsletter = (checked) => {
		setNewsletterChecked(checked);
	};

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "stateInput") {
			setStateInput(value);
		} else {
			setCityInput(value);
		}
	};

	const navigate = useNavigate();

    const navigateToSellPage = () => {
        navigate('/vendor/onboarding'); // Replace with your actual route
    };

	const profileOptions = [
		{
			isActive: true,
			text: "User Details",
			image: "/images/profilehead.png",
			description: "This is where you can edit your profile information"
		},
		{
			text: "Saved Details",
			image: "/images/heart.png",
			description: "View and manage your saved details"
		},
		{
			text: "Reviews",
			image: "/images/star.png",
			description: "View and manage your reviews"
		}
	];

	const [activeOption, setActiveOption] = useState(profileOptions[0].text);

	const handleOptionClick = (text) => {
		setActiveOption(text);
	};

	return (
		<div>
			<div className=" text-gray-700 max-w-7xl mx-auto py-10 text-sm flex mx-auto px-4 xl:px-2 gap-6 ">
				<div
					className={`mx-auto w-full lg:w-[30%] h-max rounded-2xl border pl-4 pr-8 py-8 ${
						editSectionOpen ? "sm:hidden" : "block"
					} lg:block`}
				>
					<p className="font-bold text-lg">Dashboard</p>
					{/* <p className="text-gray-500 mt-0">
						This is were you can edit your profile information
					</p> */}
					<div className="py-4 flex gap-3 lg:flex-row flex-col items-center">
						<div className="">
							<img
								src={
									userProfile && userProfile.image
										? userProfile.image
										: "/images/profilehead.png"
								}
								alt=""
								className="rounded-full w-12 h-12 border"
							/>
						</div>
						<div className="flex flex-col">
							<p className="text-base pb-0 mb-0">Chima David</p>
							<p className="text-gray-500 ">Customer</p>
						</div>
					</div>
					<div className="flex gap-4 pr-4 pb-3">
						<button
							color=""
							className="bg-purple-700 text-white flex items-center gap-2 rounded-lg px-4 text-xs  text-xs hover:bg-purple-200 hover:text-purple-700 duration-500 whitespace-nowrap"
						>
							<FaImage className="w-4 h-4" />
							Update Picture
						</button>
						<button
							color=""
							className="bg-white border  flex items-center gap-2 rounded-lg px-4 text-xs py-2 whitespace-nowrap text-xs hover:bg-red-700 hover:text-white duration-500"
						>
							<FaTrash />
							Remove
						</button>
					</div>

					<div className="flex flex-col items-center gap-2  border-y border-gray-200 py-5">
						{/* profile options  */}

						{profileOptions.map((option, index) => (
							<Profileoption
								key={index}
								isActive={activeOption === option.text}
								text={option.text}
								image={option.image}
								description={option.description}
								onClick={() => handleOptionClick(option.text)}
							/>
						))}

						{/* sell Button  */}
						<div className="w-full">
							<div
								className={`py-2 flex gap-3 lg:flex-row flex-col items-start transition-all duration-500 hover:ring-1   hover:bg-purple-100 rounded-xl cursor-pointer px-2 flex-1 hover:ring-purple-200`}
							>
								<div className="">
									<img
										src={"/images/shop-icon-purple.png"}
										alt=""
										className="rounded-full size-4 mx-2 text-purple-500 "
									/>
								</div>
								<div className="flex flex-col" onClick={navigateToSellPage}>
            <p className="text-sm font-bold pb-0 mb-0 text-purple-700">
                Sell On Bumersell
            </p>
        </div>
							</div>
						</div>
					</div>
					<div className="border-t border-b pt-5 pb-4">
						<div
							className="flex lg:hidden edit justify-between items-center py-2"
							onClick={() => setEditSectionOpen(true)}
						>
							<div>
								<p className="font-semibold text-lg">Profile Information</p>
								<p className="text-gray-500">
									This is were you can edit your profile information
								</p>
							</div>
							<FaAngleRight className="" />
						</div>
						<div className="flex justify-between items-center">
							<div>
								<p className="font-semibold  ">Email Notification</p>
								<p className="text-gray-500 text-xs">
									Get email notification on new products or other alerts
								</p>
							</div>
							<Switch
								onChange={handleChangeEmail}
								checked={emailChecked}
								offColor="#eee"
								onColor="#eee"
								uncheckedIcon={false}
								checkedIcon={false}
								height={14}
								width={32}
								handleDiameter={18}
								offHandleColor="#8529CD"
								onHandleColor="#8529CD"
							/>
						</div>
						<div className="flex justify-between items-center pt-6">
							<div>
								<p className="font-semibold ">Newsletter Alert</p>
								<p className="text-gray-500 text-xs">
									Get notification on new articles or events
								</p>
							</div>
							<Switch
								onChange={handleChangeNewsletter}
								checked={newsletterChecked}
								offColor="#eee"
								onColor="#eee"
								uncheckedIcon={false}
								checkedIcon={false}
								height={14}
								width={32}
								handleDiameter={18}
								offHandleColor="#8529CD"
								onHandleColor="#8529CD"
							/>
						</div>
					</div>
					<div className=" border-b pt-4 pb-3 flex flex-col gap-1">
						<Link
							color=""
							to={""}
							className="bg-white flex text-black text-center gap-2 px-2.5 rounded-lg py-2  text-xs hover:bg-purple-100 hover:text-gray-400 duration-500"
						>
							<FaQuestionCircle className="mt-1" />
							FAQ
						</Link>
						<Link
							color=""
							to={""}
							className="bg-white text-black text-center gap-2 flex  py-2 px-2.5 rounded-lg text-xs hover:bg-purple-100 hover:text-gray-400 duration-500"
						>
							<FaInfoCircle className="mt-1" />
							Need Help
						</Link>
						<Link
							color=""
							to={""}
							className="bg-white text-black text-center gap-2 flex px-2.5 rounded-lg py-2 text-xs hover:bg-purple-100 hover:text-gray-400 duration-500"
						>
							<AiOutlineBug className="mt-1" />
							Report Issues
						</Link>
					</div>
					<div className=" pt-4 pb-3 flex flex-col gap-3">
						<Link to={""} className="text-red-600 hover:text-red-800">
							Logout
						</Link>
						<Link to={""} className="text-red-600 hover:text-red-800">
							Deactivate Account
						</Link>
					</div>
				</div>

				{/* ================================================================================== */}
				{/* ================================================================================== */}
				{/* ================================================================================== */}
				{/* ================================================================================== */}

				{/* second section */}
				<div
					className={`mx-auto w-full  rounded-xl profileInfo px-8 py-4 rounded-lg lg:flex flex-col ${
						editSectionOpen ? "flex" : "hidden"
					}`}
				>
					{(() => {
						switch (activeOption) {
							case "User Details":
								return <ProfileComponent userProfile={userProfile} />;
							case "Saved Details":
								return <SavedProduct />;
							case "Reviews":
								return <ReviewComponent/>;
							default:
								return <ProfileComponent userProfile={userProfile} />;
						}
					})()}
				</div>
			</div>
		</div>
	);
}

export default ProfileSection;
