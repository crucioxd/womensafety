import React from "react";
import { FaShieldAlt, FaRobot, FaHandsHelping } from "react-icons/fa";
import Navbar from "../components/navbar";
import womenImage from "../assets/mainimage.png";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import "./home.css";

const theme = {
  primary: "#6A1B9A", // Purple shade for empowerment
  secondary: "#D81B60", // Pink accent
  textDark: "#2D1339", // Dark purple text
};

const Home = () => {

  const bulletins = [
    "New: Women's Safety Scholarship Program applications now open!",
    "Delhi Government launches 24/7 women's helpline: 011-23379181",
    "Self-defense workshops available in all districts - Register online",
    "GPS-enabled safety devices now available at subsidized rates",
    "Night patrol vehicles doubled in high-risk areas"
  ];
  return (
    <>
    
      <div className="home-container">
      <div className="news-ticker">
          <div className="ticker-content">
            {bulletins.map((item, index) => (
              <span key={index} className="ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-heading">Creating a Safer Delhi for Women</h1>
          <div className="hero-content">
            <div className="hero-text">
              <p>
                Empowering women through technology-driven safety solutions and
                community support. Join us in building a secure environment with
                instant emergency response, AI assistance, and community
                vigilance.
              </p>
              <div className="buttons">
              <button className="registerbtn">Register now</button>
            <button className="livebtn">Live tracking</button>

              </div>
             
            </div>
            <div className="hero-image-container">
              <img
                src={womenImage}
                alt="Women smiling"
                className="hero-image"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div className="features-grid">
          {/* SOS Feature Card */}
          <div className="feature-card">
            <FaShieldAlt size={48} color={theme.primary} className="feature-icon" />
            <h3 className="feature-heading">Emergency SOS System</h3>
            <p>
              Instant emergency alerts with live location tracking and immediate
              connection to verified officials through an AI-powered response
              system.
            </p>
          </div>

          {/* AI Chatbot Card */}
          <div className="feature-card">
            <FaRobot size={48} color={theme.secondary} className="feature-icon" />
            <h3 className="feature-heading">Safety Assistant Chatbot</h3>
            <p>
              24/7 AI guidance for government schemes, safe routes, and immediate
              reporting of safety concerns in your neighborhood.
            </p>
          </div>

          {/* Volunteering Card */}
          <div className="feature-card">
            <FaHandsHelping
              size={48}
              color={theme.primary}
              className="feature-icon"
            />
            <h3 className="feature-heading">Community Volunteering</h3>
            <p>
              Join our safety network for night patrols and community watch
              programs. Help create safer spaces through collective vigilance.
            </p>
           
          </div>
        </div>
        <Testimonials/>
        <Footer/>
      </div>
  
    </>
  );
};

export default Home;
