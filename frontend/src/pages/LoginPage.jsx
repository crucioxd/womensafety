import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Footer from '../components/Footer';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    contact: '',
    aadhaar: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      navigate('/');
    }
  }, [navigate]);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.match(/^[A-Za-z ]+$/)) tempErrors.name = 'Invalid name';
    if (!formData.username.match(/^\w+$/)) tempErrors.username = 'Invalid username';
    if (!formData.contact.match(/^\d{10}$/)) tempErrors.contact = 'Invalid contact';
    if (!formData.aadhaar.match(/^\d{12}$/)) tempErrors.aadhaar = 'Invalid Aadhaar';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        localStorage.setItem('authToken', 'dummy-token');
        onLogin();
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div>
    <div className="login-container">
      <div className="wave-bg"></div>
      
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">
          <span className="woman-emoji">👩</span> Welcome to Sumitra
        </h2>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="tel"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            className={errors.contact ? 'error' : ''}
          />
          {errors.contact && <span className="error-message">{errors.contact}</span>}
        </div>

        <div className="form-group">
          <label>Aadhaar Verification</label>
          <input
            type="number"
            value={formData.aadhaar}
            onChange={(e) => setFormData({ ...formData, aadhaar: e.target.value })}
            className={errors.aadhaar ? 'error' : ''}
          />
          {errors.aadhaar && <span className="error-message">{errors.aadhaar}</span>}
        </div>

        <button type="submit" className="login-button" disabled={isSubmitting}>
          {isSubmitting ? 'Securing Access...' : 'Verify & Continue'}
        </button>
      </form>

      {/* Success Popup */}
      {isSubmitting && (
        <div className="success-popup">
          <div className="popup-content">
            <div className="checkmark">✓</div>
            <h3>Login Successful!</h3>
            <p>Redirecting to Safety Dashboard...</p>
          </div>
        </div>
      )}
     
    </div>
     <Footer/>
     </div>
  );
};

export default LoginPage;