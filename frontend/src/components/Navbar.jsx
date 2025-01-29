import { FaCommentDots, FaCrosshairs, FaHandHolding, FaFemale, FaRobot } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import Chatbot from "./Chatbot/Chatbot";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
          <span className="logo-text">Sum<FaFemale className="logo-icon" />tra</span>
        </div>

        <div className="nav-links">
          {/* Changed href to Link component for Home */}
          <Link to="/" className="nav-link">Home</Link>

          <div 
            className="nav-link dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Services
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/file-complaint" className="dropdown-item">
                  <FaCommentDots className="dropdown-icon" /> Complaints
                </Link>
                <a href="#volunteer" className="dropdown-item">
                  <FaHandHolding className="dropdown-icon" /> Volunteership
                </a>
                <a href="#sos" className="dropdown-item">
                  <FaCrosshairs className="dropdown-icon" /> Live SOS
                </a>
              </div>
            )}
          </div>
        </div>

        <a href="login" className="login">Login</a>

        {/* Chatbot Toggle Button */}
        <button 
          className="chatbot-fixed-button" 
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <FaRobot className="chatbot-icon" />
        </button>
      </nav>

      {/* Chatbot Component */}
      {isChatOpen && <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default Navbar;
