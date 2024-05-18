import React, { useState } from "react";
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
  FaArrowLeft,
} from "react-icons/fa";

import { BsTelephone } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineBug, AiTwotoneMail } from "react-icons/ai";

export default function ProfilePage({ profile }) {
  const [emailChecked, setEmailChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);
  const [formData, setFormData] = useState(profile);
  const [editSectionOpen, setEditSectionOpen] = useState(false); // State to track if edit section is open on mobile

  const handleChangebtn = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  // Handler for email notification switch
  const handleChangeEmail = (checked) => {
    setEmailChecked(checked);
  };

  // Handler for newsletter alert switch
  const handleChangeNewsletter = (checked) => {
    setNewsletterChecked(checked);
  };
  return (
    <div>
      <div className="container py-10 flex mx-auto px-4 xl:px-2 gap-6 ">
        <div
          className={`mx-auto w-full lg:w-[40%] ${
            editSectionOpen ? "hidden" : "block"
          }`}
        >
          <p className="font-semibold text-xl">My Account</p>
          <p className="text-gray-500">
            This is were you can edit your profile information
          </p>
          <div className="py-4 flex gap-3 lg:flex-row flex-col items-center">
            <div className="rounded-full w-24 h-24 border">
              <img src="" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl">Chima David</p>
              <p className="text-gray-500 py-2">Customer</p>
              <div className="flex gap-4">
                <button
                  color=""
                  className="bg-purple-700 text-white flex items-center gap-2 rounded-xl px-4 py-2 text-sm hover:bg-purple-200 hover:text-purple-700 duration-500"
                >
                  <FaImage />
                  Update Picture
                </button>
                <button
                  color=""
                  className="bg-white border text--purple-700 flex items-center gap-2 rounded-xl px-4 py-2 text-sm hover:bg-purple-700 hover:text-white duration-500"
                >
                  <FaTrash />
                  Remove Picture
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-b pt-5 pb-4">
            <div
              className="flex lg:hidden edit justify-between items-center py-2"
              onClick={() => setEditSectionOpen(true)}
            >
              <div>
                <p className="font-semibold text-xl">Profile Information</p>
                <p className="text-gray-500">
                  This is were you can edit your profile information
                </p>
              </div>
              <FaAngleRight className="" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-xl">Email Notification</p>
                <p className="text-gray-500">
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
                <p className="font-semibold text-xl">Newsletter Alert</p>
                <p className="text-gray-500">
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
          <div className=" border-b pt-4 pb-3 flex flex-col gap-3">
            <Link
              color=""
              to={""}
              className="bg-white flex text-black text-center gap-2 px-4 py-2  text-xl hover:bg-purple-100 hover:text-gray-400 duration-500"
            >
              <FaQuestionCircle className="mt-1" />
              FAQ
            </Link>
            <Link
              color=""
              to={""}
              className="bg-white text-black text-center gap-2 flex px-4 py-2  text-xl hover:bg-purple-100 hover:text-gray-400 duration-500"
            >
              <FaInfoCircle className="mt-1" />
              Need Help
            </Link>
            <Link
              color=""
              to={""}
              className="bg-white text-black text-center gap-2 flex px-4 py-2 text-xl hover:bg-purple-100 hover:text-gray-400 duration-500"
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
        <div
          className={`mx-auto w-full  lg:w-[50%] profileInfo  border p-8 rounded-lg lg:flex flex-col ${
            editSectionOpen ? "flex" : "hidden"
          }`}
        >
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
                      className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm "
                      placeholder="First Name"
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
                      className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
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
                  className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
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
                <AiTwotoneMail
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 h-5 w-5 2 focus-within:text-purple-700 text-gray-color"
                  alt="email"
                />
                <input
                  type="email"
                  className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
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
                  className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
                  placeholder="+234702862716"
                  // value={formData.tel}
                  onChange={handleChangebtn}
                />
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
                  className="w-full px-4 ml-3 py-2 pl-8 border-transparent focus:border-transparent outline-none active:border-transparent active:ring-none active:outline-none ring-none focus:outline-none focus:ring-0 text-sm"
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
                id="age"
                name="age"
                // value={formData.age}
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
                className="bg-purple-700 text-white flex items-center gap-2 rounded-xl px-4 py-2 text-sm hover:bg-purple-200 hover:text-purple-700 duration-500"
              >
                Save Changes
              </button>
              <button
                color=""
                className="bg-white border text--purple-700 flex items-center gap-2 rounded-xl px-4 py-2 text-sm hover:bg-purple-700 hover:text-white duration-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
