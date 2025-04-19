import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (

    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="https://www.lodhagroup.com/themes/lodhanew/images/home/logo.webp" alt="Rachana Lifestyle Logo" />
        </div>
        <div className="navbar-links">
        <a href="#home">Home</a>

  <a href="#overview">Overview</a>
  <a href="#amenities">Amenities</a>

  <a href="#project-highlights">Project Highlights</a>
  
  <a href="#contact-us">Contact Us</a>
</div>
      </div>
    </nav>
    
  );
};

export default Navbar
