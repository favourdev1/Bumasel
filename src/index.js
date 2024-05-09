import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import TestComponent from "./components/TestComponent";
import LoginPage from "./components/Login/LoginPage";
import Mainlayout from "./components/AppComponents/Layout/Mainlayout";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Mainlayout />}>
          <Route path="/" element={<App />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
