import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// components 
import TestComponent from './components/TestComponent';
import LoginPage from './components/Login/LoginPage';
import Signup from './components/Signup/Signup';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/test" element={<TestComponent/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);