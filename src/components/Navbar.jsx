import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/'); // ✅ Redirect to Home
  };

  return (
    <nav className="navbar">
      <div className="logo">CGPA Calculator</div>
      <div>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <Link to="/calculator">Calculator</Link>
            <span className="user-name">{user?.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
