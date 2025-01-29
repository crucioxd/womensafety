import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-heading">Her Story, Her Strength</h2>
      <div className="testimonials-grid">
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="profile-header">
            <FaUserCircle className="profile-icon" />
            <div className="profile-info">
              <h4>Anjali Sharma</h4>
              <p>Student, Delhi University</p>
            </div>
          </div>
          <p className="testimonial-text">
            "The SOS feature saved me during an emergency ride home. 
            The response team arrived in just 8 minutes with real-time 
            location tracking. Truly life-saving!"
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="profile-header">
            <FaUserCircle className="profile-icon" />
            <div className="profile-info">
              <h4>Priya Verma</h4>
              <p>Working Professional</p>
            </div>
          </div>
          <p className="testimonial-text">
            "The chatbot helped me file a harassment complaint anonymously. 
            It guided me through the entire legal process - empowering and discreet!"
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <div className="profile-header">
            <FaUserCircle className="profile-icon" />
            <div className="profile-info">
              <h4>Neha Gupta</h4>
              <p>Homemaker</p>
            </div>
          </div>
          <p className="testimonial-text">
            "Community volunteering feature connected me with local safety patrols. 
            Now I feel safer walking my kids to school every morning."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;