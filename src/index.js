import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/AppComponents/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// components 
import TestComponent from './components/TestComponent';
import LoginPage from './components/Auth/Login/LoginPage';
import Signup from './components/Auth/Signup/Signup';

ReactDOM.render(

  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Mainlayout />}>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<CardDetails />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
