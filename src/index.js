/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import HomePage from "./HomePage";
import LoginPage from "./components/Auth/Login/LoginPage";
import Signup from "./components/Auth/Signup/Signup";
import Mainlayout from "./components/AppComponents/Layout/Mainlayout";
import Sellerspage from "./Pages/Vendors/Sellerspage";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<Mainlayout />}>
					<Route path="/" element={<HomePage />} />
					{/* your next path should come here  */}
					
					<Route path="/sellers" element={<Sellerspage />} />
				</Route>
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
