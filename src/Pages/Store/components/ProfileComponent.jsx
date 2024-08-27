import React,{useState} from 'react'
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
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineBug, AiTwotoneMail } from "react-icons/ai";
export const ProfileComponent = ({userProfile}) => {

    const [emailChecked, setEmailChecked] = useState(false);
	const [newsletterChecked, setNewsletterChecked] = useState(false);
	const [formData, setFormData] = useState(userProfile);
	const [editSectionOpen, setEditSectionOpen] = useState(false); // State to track if edit section is open on mobile

	const handleChangebtn = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here
		console.log(formData);
    }
    

    // Handler for email notification switch
	const handleChangeEmail = (checked) => {
		setEmailChecked(checked);
	};

	// Handler for newsletter alert switch
	const handleChangeNewsletter = (checked) => {
		setNewsletterChecked(checked);
	};

	const [stateInput, setStateInput] = useState("");
	const [cityInput, setCityInput] = useState("");

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		if (id === "stateInput") {
			setStateInput(value);
		} else {
			setCityInput(value);
		}
	};

    return (
        <div>
            	<div className="p-5 w-full flex lg:hidden">
						<Link to={""} onClick={() => setEditSectionOpen(false)}>
							<FaArrowLeft />
						</Link>
					</div>
					<h2 className="text-2xl font-bold lg:block hidden">
						{" "}
						Profile Information
					</h2>
					<p className="text-gray-400 mb-4 lg:block hidden">
						This is were you can edit your profile information
					</p>
					<form onSubmit={handleSubmit} className="lg:w-[80%] w-full">
						<div className="mb-4">
							<label htmlFor="fullname" className="block mb-1">
								Full Name
							</label>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								<div>
									<div className="relative border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
										{/* You can replace the src with the appropriate icon for first name */}
										<FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
										<input
											type="text"
											className="w-full px-4 ml-3 py-2 pl-8 border-0 focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs disabled:bg-transparent"
											placeholder="First Name"
											disabled
											//   value={formData.FirstName}
											onChange={handleChangebtn}
										/>
									</div>
								</div>
								<div>
									<div className="relative border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
										{/* You can replace the src with the appropriate icon for last name */}
										<FiUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 text-gray-color" />
										<input
											type="text"
											disabled
											className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs disabled:bg-transparent"
											placeholder="Last Name"
											//   value={formData.LastName}
											onChange={handleChangebtn}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-4">
							<label className="block mb-1">Gender</label>
							<div>
								<label className="inline-flex items-center mr-4">
									<input
										type="radio"
										name="gender"
										value="male"
										// checked={formData.gender === "male"}
										onChange={handleChangebtn}
										className="mr-2"
									/>
									Male
								</label>
								<label className="inline-flex items-center">
									<input
										type="radio"
										name="gender"
										value="female"
										// checked={formData.gender === "female"}
										onChange={handleChangebtn}
										className="mr-2"
									/>
									Female
								</label>
								<label className="inline-flex items-center mx-2">
									<input
										type="radio"
										name="gender"
										value="Others"
										// checked={formData.gender === "others"}
										onChange={handleChangebtn}
										className="mr-2"
									/>
									Others
								</label>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="address" className="block mb-1">
								Address
							</label>
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								<FaLocationArrow
									className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
									alt="Address"
								/>
								<input
									type="text"
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs disabled:bg-transparent"
									placeholder="Where are you located?"
									// value={formData.Address}
									onChange={handleChangebtn}
								/>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block mb-1">
								Email
							</label>
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
							<img src="/images/sms.png"
							className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-400"
							alt="email"
						/>
								<input
									type="email"
									value={userProfile.email}
									disabled
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs disabled:bg-transparent"
									placeholder="osondusweet@gmail.com"
									// value={formData.email}
									onChange={handleChangebtn}
								/>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="Tel" className="block mb-1">
								Phone Number
							</label>
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								{/* You can replace the src with the appropriate icon for phone number */}

								<BsTelephone className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
								<input
									type="tel"
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs"
									placeholder="+234702862716"
									value={userProfile.phoneNumber}
									disabled
									onChange={handleChangebtn}
								/>
							</div>
						</div>
						{/* city and state field , side by side  */}
						<div className="grid grid-cols-2 gap-4 items-center">
							<div className="mb-4">
								<label htmlFor="state" className="block mb-1">
									State
								</label>
								<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
									{/* Add your state input field here */}
									<select
										id="stateInput"
										value={stateInput}
										onChange={handleInputChange}
										className="w-full  mr-3 py-2 pl-8 border-0 focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs disabled:bg-transparent"
									>
										<option value="">Select a state</option>
										<option value="state1">State 1</option>
										<option value="state2">State 2</option>
										<option value="state3">State 3</option>
										{/* Add more options as needed */}
									</select>
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="city" className="block mb-1">
									City
								</label>
								<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
									{/* Add your city input field here */}
									<input
										type="text"
										id="cityInput"
										value={cityInput}
										onChange={handleInputChange}
										className="w-full px-4 ml-3 py-2 pl-8 border-0 focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs disabled:bg-transparent"
									/>
								</div>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="occupation" className="block mb-1">
								Occupation
							</label>
							<div className="relative mt-3 border overflow-hidden border-gray-200 rounded-md focus-within:ring-2 focus-within:ring-purple-700 outline-none py-1">
								{/* You can replace the src with the appropriate icon for phone number */}
								<FaBriefcase className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color" />
								<input
									type="text"
									className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-xs"
									placeholder="What Do You Do"
									// value={formData.tel}
									onChange={handleChangebtn}
								/>
							</div>
						</div>
						<div className="mb-4">
							<label htmlFor="age" className="block mb-1">
								Age
							</label>
							<select
								value={userProfile.ageRange}
								id="ageRange"
								name="ageRange"
								onChange={handleChangebtn}
								className="w-full border rounded-lg px-4 py-2"
							>
								<option value="18-25">18-25</option>
								<option value="26-35">26-35</option>
								<option value="36-45">36-45</option>
								<option value="46-55">46-55</option>
								<option value="56+">56+</option>
							</select>
						</div>
						<div className="flex justify-start gap-10">
							<button
								color=""
								className="bg-purple-700 text-white flex items-center gap-2 rounded-lg px-4 py-2 text-xs hover:bg-purple-200 hover:text-purple-700 duration-500"
							>
								Save Changes
							</button>
							<button
								color=""
								className="bg-white border text--purple-700 flex items-center gap-2 rounded-lg px-4 py-2 text-xs hover:bg-purple-700 hover:text-white duration-500"
							>
								Cancel
							</button>
						</div>
					</form>
        </div>
    )
}
