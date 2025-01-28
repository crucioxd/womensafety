import { FaCommentDots, FaCrosshairs, FaHandHolding, FaRobot, FaShieldAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <FaShieldAlt className="logo-icon" />
        <span className="logo-text">SafeDelhi</span>
      </div>

      <div className="nav-links">
        <a href="#features" className="nav-link">Features</a>
        <a href="#volunteer" className="nav-link">Volunteer</a>
        <a href="#schemes" className="nav-link">Schemes</a>
      </div>

      <button className="chatbot-button">
        <FaRobot className="chatbot-icon" />
      </button>
    </nav>
  );
};

export default Navbar;