import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TestComponent from './components/TestComponent';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/test" element={<TestComponent/>} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);