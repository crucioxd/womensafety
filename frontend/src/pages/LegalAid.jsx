import React, { useState } from 'react';
import './LegalAdviceForm.css'; // Ensure this CSS file is correct
import Footer from '../components/Footer';

const LegalAdviceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    issueType: '',
    location: '',
    description: '',
    file: null,
    relation: '',
    isForSomeoneElse: false,
    showPopup: true, // New state to control popup visibility
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status

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
    setIsSubmitted(true); 
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
            <h3>Welcome To Legal Aid Facility</h3>
            <button onClick={() => handlePopupSelection('yourself')}>Continue</button>
          </div>
        </div>
      )}

      {!formData.showPopup && !isSubmitted && (
        <div className="overall">
          <div className="legal-advice-form-container">
            <h2 className="form-heading">Seek Free Legal Advice</h2>
            <form onSubmit={handleSubmit} className="legal-advice-form">
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
                  <label htmlFor="relation">Your Relation to the Individual:</label>
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
                <label htmlFor="issueType">Legal Issue Type:</label>
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Legal Issue Type</option>
                  <option value="Divorce">Divorce</option>
                  <option value="Domestic Violence">Domestic Violence</option>
                  <option value="Harassment">Harassment</option>
                  <option value="Child Custody">Child Custody</option>
                  <option value="Employment Rights">Employment Rights</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location of Incident:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Brief Description of the Legal Issue:</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="file">Upload Supporting Documents (optional):</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleChange}
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="submit-btn">Submit for Legal Advice</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isSubmitted && (
        <div className="thank-you-message">
          <h3>Thank you for reaching out!</h3>
          <p>Your request has been submitted. Our team will contact you soon.</p>
        </div>
      )}

    
    </>

  );
};

export default LegalAdviceForm;
