/** @format */
import React, { useEffect } from "react";
import "./LoginPage.css";
export default function LoginPage() {
	useEffect(() => {
		// Save original overflow style
		const originalStyle = window.getComputedStyle(document.body).overflow;  
	
		// Prevent scrolling on mount
		document.body.style.overflow = 'hidden';
		return () => document.body.style.overflow = originalStyle;
	  }, []); // Empty array ensures effect is only run on mount and unmount
	
	return (
		<div className="h-screen m-0 bg-white flex items-center  px-3">
			<div className="w-2/5 overflow-hidden  ">
			
					<img src="./images/login-girl.png" className="rounded-xl border-slate-100  max-h-[96vh] w-full" alt="Login Page Image " />
		
			</div>
			<div className="w-1/2"></div>
		</div>
	);
}

