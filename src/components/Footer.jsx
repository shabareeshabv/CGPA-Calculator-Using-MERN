import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About</h4>
        <p>
          This CGPA Calculator helps students accurately calculate their academic CGPA.
          Easily save and download results.
        </p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/calculator">Calculator</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: support@cgpacalc.com</p>
        <p>Phone: +91-9876543210</p>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CGPA Calculator | All rights reserved</p>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
