import React, { useState } from 'react';
import './ComplaintForm.css';
import Footer from '../components/Footer';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    incidentType: '',
    dateTime: '',
    location: '',
    description: '',
    file: null,
    relation: '',
    isForSomeoneElse: false,
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
            <h3>Who is this complaint for?</h3>
            <button onClick={() => handlePopupSelection('yourself')}>For yourself</button>
            <button onClick={() => handlePopupSelection('someoneElse')}>For someone else</button>
          </div>
        </div>
      )}

      {!formData.showPopup && (
        <div className="overall">
        <div className="complaint-form-container">
          <h2 className="form-heading">File a Complaint</h2>
          <form onSubmit={handleSubmit} className="complaint-form">
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

        {/* Existing form fields */}
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
          <label htmlFor="incidentType">Incident Type:</label>
          <select
            id="incidentType"
            name="incidentType"
            value={formData.incidentType}
            onChange={handleChange}
            required
          >
            <option value="">Select Incident Type</option>
            <option value="Harassment">Harassment</option>
            <option value="Assault">Assault</option>
            <option value="Stalking">Stalking</option>
            <option value="Theft">Theft</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateTime">Date & Time of Incident:</label>
          <input
            type="datetime-local"
            id="dateTime"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            required
          />
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
          <label htmlFor="description">Incident Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload Evidence (optional):</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">Submit Complaint</button>
        </div>
      </form>
   
    </div>
    <Footer/>
    </div>
      )};
    </>
  );
};

export default ComplaintForm;
