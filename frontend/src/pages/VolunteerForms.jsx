import React, { useState } from 'react';
import './VolunteerForm.css'; // Make sure to update your CSS file accordingly
import Footer from '../components/Footer';

const VolunteershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    availability: '',
    skills: '',
    motivation: '',
    file: null,
    isForSomeoneElse: false,
    relation: '',
    showPopup: true, // New state to control popup visibility
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // Add form submission logic here
  };

  const handlePopupSelection = (selection) => {
    setFormData({
      ...formData,
      showPopup: false,
      isForSomeoneElse: selection === 'someoneElse',
    });
  };

  return (
    <>
      {formData.showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>"Serve Mankind,Serve God." Swami Vivekanand 
            </h3>
            <button onClick={() => handlePopupSelection('yourself')}>Apply Now</button>
            {/* <button onClick={() => handlePopupSelection('someoneElse')}>For someone else</button> */}
          </div>
        </div>
      )}

      {!formData.showPopup && (
        <div className="overall">
          <div className="volunteership-form-container">
            <h2 className="form-heading">Apply for Volunteership</h2>
            <form onSubmit={handleSubmit} className="volunteership-form">
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {formData.isForSomeoneElse && (
                <div className="form-group">
                  <label htmlFor="relation">Your Relation to the Applicant:</label>
                  <input
                    type="text"
                    id="relation"
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {/* Updated form fields */}
              <div className="form-group">
                <label htmlFor="contact">Contact Number:</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="availability">Availability (days and times):</label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="skills">Skills and Expertise:</label>
                <textarea
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="motivation">Why do you want to volunteer?</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="file">Upload Resume or Supporting Documents (optional):</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="submit-btn">Submit Application</button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default VolunteershipForm;
