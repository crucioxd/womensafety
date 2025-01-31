import { FaCommentDots, FaCrosshairs, FaHandHolding, FaFemale, FaRobot, FaBalanceScale } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Chatbot from "./Chatbot/Chatbot";
import logo from  "../assets/Logo.png";

const Navbar = ({ isLoggedIn, setIsLoggedIn, lang, toggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
  };

  return (
    <>
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="logo-container">
        <img src={logo} alt="Sumitra Logo" className="logo-image" />

        </div>

        <div className="nav-links">
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
                <Link to="/volunteer" className="dropdown-item">
                  <FaHandHolding className="dropdown-icon" /> Volunteership
                </Link>
                <Link to="/live-sos" className="dropdown-item">
                  <FaCrosshairs className="dropdown-icon" /> Live SOS
                </Link>
                <Link to="/legal-aid" className="dropdown-item">
                  <FaBalanceScale className="dropdown-icon" /> Legal Aid
                </Link>
                
              </div>
            )}
          </div>
        </div>

        <div className="nav-right">
          <button className="language-toggle" onClick={toggleLanguage}>
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
          
          {!isLoggedIn ? (
            <Link to="/login" className="login">Login</Link>
          ) : (
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          )}
        </div>

        <button 
          className="chatbot-fixed-button" 
          onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <FaRobot className="chatbot-icon" />
        </button>
      </nav>

      {isChatOpen && <Chatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default Navbar;