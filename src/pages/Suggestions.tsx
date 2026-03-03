import React, { useState } from 'react';
import './Suggestions.css';

const Suggestions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sport: 'soccer',
    idea: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    // Reset form after a delay or just leave as submitted
  };

  return (
    <div className="suggestions-page">
      <div className="container">
        <div className="form-container fade-in">
          <div className="form-header">
            <h1>Share Your <span>Vision</span></h1>
            <p>We value innovative ideas in sports analytics. Tell us what's on your mind.</p>
          </div>

          {submitted ? (
            <div className="success-message">
              <h2>Thank You!</h2>
              <p>Your suggestion has been received. Our team will review it shortly.</p>
              <button onClick={() => setSubmitted(false)} className="btn-primary">Submit Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="suggestion-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="sport">Target Sport</label>
                <select 
                  id="sport" 
                  name="sport" 
                  value={formData.sport} 
                  onChange={handleChange}
                >
                  <option value="soccer">Soccer</option>
                  <option value="basketball">Basketball</option>
                  <option value="baseball">Baseball</option>
                  <option value="football">American Football</option>
                  <option value="tennis">Tennis</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="idea">Your Suggestion / Idea</label>
                <textarea 
                  id="idea" 
                  name="idea" 
                  value={formData.idea} 
                  onChange={handleChange} 
                  required 
                  rows={6}
                  placeholder="Describe your idea in detail..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary submit-btn">Submit Suggestion</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
