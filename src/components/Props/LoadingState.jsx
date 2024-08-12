/** @format */

import React from "react";
function LoadingState({loadingText = "Loading..."}) {
  return (
    <div className="fixed inset-0 z-[10000] bg-black/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="bg-white shadow-sm border  rounded-lg flex items-center justify-center flex-col z-[10001]">
        <svg
          className="animate-spin h-16 w-16 m-10 text-purple-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        {/* <p className="text-xs mt-4">{ loadingText}</p> */}
      </div>
    </div>
  );
}

export default LoadingState
