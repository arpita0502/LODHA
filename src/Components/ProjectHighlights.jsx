import React, { useState } from 'react';
import './ProjectHighlights.css';
import premiumResidence from '../Assets/premium.png'; // adjust path if needed
import house from '../Assets/house.png';
import families from '../Assets/families.png';
import years from '../Assets/years.png';


const ProjectHighlights = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://p7hjkeqa74.execute-api.eu-north-1.amazonaws.com/prod/contactform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message. We will get back to you soon!' });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id = "project-highlights" className="project-highlights-container">
      <div className="header-section">
        <h2 className="section-title">PROJECT HIGHLIGHTS</h2>
      </div>
      
      <div className="highlights-icons">
        <div className="highlight-item">
          <div className="icon-container">
            <img src="https://rachanalifestyle.com/bellacasaroyale/wp-content/uploads/2024/10/massive-carpet-area.png" alt="Prime Location" className="highlight-icon" />
          </div>
          <div className="highlight-text">
            <div className="highlight-title">PRIME</div>
            <div className="highlight-subtitle">LOCATION</div>
          </div>
        </div>
        
        <div className="highlight-item">
          <div className="icon-container">
          <img src={premiumResidence} alt="Premium Residences" className="highlight-icon" />
          </div>
          <div className="highlight-text">
            <div className="highlight-title">PREMIUM</div>
            <div className="highlight-subtitle">RESIDENCES</div>
          </div>
        </div>
        
        <div className="highlight-item">
          <div className="icon-container">
          <img src={house} alt="house" className="highlight-icon" />
          </div>
          <div className="highlight-text">
            <div className="highlight-title">NEARING</div>
            <div className="highlight-subtitle">POSSESSION HOMES</div>
          </div>
        </div>
        
        <div className="highlight-item">
          <div className="icon-container">
          <img src={families} alt="house" className="highlight-icon" />
          </div>
          <div className="highlight-text">
            <div className="highlight-title">560+</div>
            <div className="highlight-subtitle">HAPPY FAMILIES</div>
          </div>
        </div>
      </div>
      
      <div className="company-section">
        <div className="company-info">
          <h3 className="company-title">Located at the highest point in Baner
          </h3>
          
          <p className="company-description">
          Set amidst the tranquility of the foothills of Baner Hill - the highest point in Baner, Lodha Massimo is a picturesque escapade. Yet, with top IT companies minutes away, and surrounded by high-end retail, renowned schools, hospitals, it keeps the world at your fingertips.
          </p>
          
          <div className="company-stats">
            <div className="stat-item">
              <div className="stat-icon">
              <img src={families} alt="house" className="highlight-icon" />
              </div>
              <div className="stat-number">10,000</div>
              <div className="stat-text">HAPPY FACES</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <img src="https://rachanalifestyle.com/bellacasaroyale/wp-content/uploads/2024/10/40-projects-1.png" alt="Projects" />
              </div>
              <div className="stat-number">40+</div>
              <div className="stat-text">PROJECTS</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-icon">
              <img src={years} alt="house" className="highlight-icon" />
              </div>
              <div className="stat-number">36+</div>
              <div className="stat-text">YEARS OF EXPERIENCE</div>
            </div>
          </div>
        </div>
        
        <div className="enquiry-form">
          <div className="form-container">
            <h3 className="form-title">Contact Us</h3>
            
            {submitStatus && (
              <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} style={{
                padding: '10px',
                marginBottom: '15px',
                borderRadius: '4px',
                color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                borderColor: submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'
              }}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone" 
                  className="form-control" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  placeholder="Message" 
                  name="message"
                  className="form-control" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectHighlights;