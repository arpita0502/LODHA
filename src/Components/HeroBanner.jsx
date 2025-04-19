import React from 'react'
import './HeroBanner.css'
// import heroimage from '../Assets/herobanner.jpg'
const HeroBanner = () => {
  return (
    <div id="home" className="hero-section">
      <img 
        src="https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight%20v2.jpg"
        alt="Bella Casa Royale Building" 
        className="hero-image"
      />
      {/* <div className="logo-overlay">
        <img src="/api/placeholder/200/80" alt="Bella Casa Royale Logo" className="hero-logo" />
      </div> */}
    </div>
  );
};

export default HeroBanner
