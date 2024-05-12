import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/AppComponents/App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

<<
<<
<<
<
HEAD

// components 
import TestComponent from './components/TestComponent';
import LoginPage from './components/Auth/Login/LoginPage';
import Signup from './components/Auth/Signup/Signup'; ===
===
=
// components
import TestComponent from "./components/TestComponent";
import LoginPage from "./components/Login/LoginPage";
import Mainlayout from "./components/AppComponents/Layout/Mainlayout"; >>>
>>>
>
tessyrich - homepage

ReactDOM.render( <
        React.StrictMode >
        <
        Router >
        <
        Routes >
        <
        Route path = "/test"
        element = { < TestComponent / > }
        /> <
        Route path = "/login"
        element = { < LoginPage / > }
        /> <
        Route path = "/"
        element = { < App / > }
        /> <
        Route path = "*"
        element = { < div > 404 Not Found < /div>} / >
            <
            /Routes> <
            /Router> <
            /React.StrictMode>,
            document.getElementById('root')
        );