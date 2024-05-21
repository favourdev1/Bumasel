/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./index.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./App.css";
import HomePage from "./HomePage";
import LoginPage from "./components/Auth/Login/LoginPage";
import Signup from "./components/Auth/Signup/Signup";
import Mainlayout from "./components/AppComponents/Layout/Mainlayout";
import Sellerspage from "./Pages/Vendors/Sellerspage";
import ProductPage from "./Pages/Products/ProductPage";
import SearchPage from "./Pages/Search/SearchPage";
import ProfilePage from "./Pages/Store/ProfilePage"
import CreateStorePage from "./Pages/Store/CreateStorePage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Mainlayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search/:search?" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/store/create" element={<CreateStorePage />} />

          {/* your next path should come here  */}
          <Route path="/sellers" element={<Sellerspage />} />
        </Route>
        <Route  path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
