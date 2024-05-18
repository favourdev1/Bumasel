// import axios from "axios";
// import React,{useState} from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// async function signin(userData) {
// 	const apiUrl = process.env.REACT_APP_API_URL;

// 	const allFieldsFilled = Object.values(userData).every(field => field !== "");

// 	if (!allFieldsFilled) {
// 		toast.error("All fields must be filled out");
// 		return;
// 	}

// 	try {
// 		axios
// 			.post(apiUrl + "/register", userData)
// 			.then(res => {
// 				console.log(res.data);
// 				let response = response.data.data;
// 				if (response.status == "error") {
// 					toast.error(response.data.message);
// 				} else {
// 					toast.success(response.data.data.message);
// 				}
// 			})
// 			.catch(error => {
// 				toast.error(error.response.data.message);
// 				console.log(error.response.data);
// 			})
// 			.finally(() => {
// 				console.log("Request completed");
// 			});
// 	} catch (error) {
// 		// console.log(error.response.data);
// 		toast.error(
// 			"An internal error occured, please contact admins for assistance."
// 		);
// 	}
// }

// export default signin;
