/** @format */

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function Modal({
  handleCloseSuccessModal,
  handleContinue,
  bigText = "Success!",
  smallText = "Your store has been created successfully.",
  buttonText = "Continue",
}) {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50">
        <div className="bg-white p-8 rounded-lg">
          <button className="" onClick={handleCloseSuccessModal}>
            <FaArrowLeft className="text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold mb-4">{bigText}</h2>
          <p>{smallText}</p>
          <button
            className="bg-purple-700 w-full text-white px-4 py-2 rounded-md hover:bg-purple-500"
            onClick={handleContinue}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;