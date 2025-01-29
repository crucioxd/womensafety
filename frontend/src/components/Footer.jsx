import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaFemale } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Horizontal Line */}
      <div className="footer-line"></div>
      
      <div className="footer-content">
        <div className="footer-section">
            <div className="left-text">
            <span className="logo-text">Sum<FaFemale className="logo-icon" />tra</span>
          <p className="footer-text">Your Safety, Our Commitment.</p>
            </div>
        
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/terms" className="footer-link">Terms of Service</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect</h4>
          <div className="social-icons">
            <a href="#" className="social-link"><FaFacebook /></a>
            <a href="#" className="social-link"><FaTwitter /></a>
            <a href="#" className="social-link"><FaInstagram /></a>
            <a href="#" className="social-link"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sumitra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;