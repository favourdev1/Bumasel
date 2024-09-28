/** @format */

import React from "react";
import "../Auth/Login/LoginPage.css";
function LoadingState({loadingText = "Loading..."}) {
  return (
    <div className="fixed inset-0 z-[1000000000] bg-black/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div className="bg-white shadow-sm border  overflow-hidden rounded-3xl flex items-center justify-center flex-col z-[10001]">
      <div class="loader"></div>
        {/* <p className="text-xs mt-4" >{ loadingText}</p> */}
      </div>
    </div>
  );
}

export default LoadingState


/* HTML: <div class="loader"></div> */
