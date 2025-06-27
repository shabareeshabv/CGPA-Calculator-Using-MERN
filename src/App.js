import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import CGPACalculator from './components/CGPACalculator';

import './App.css';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/calculator" /> : <Login />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/calculator" /> : <Signup />} />
          <Route
            path="/calculator"
            element={isLoggedIn ? <CGPACalculator /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;