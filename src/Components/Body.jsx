import React, { useEffect, useRef } from 'react';
import './Body.css';

const Body = () => {
  const sections = useRef([]);
  const logoRef = useRef(null);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);
    
    sections.current.forEach(section => {
      if (section) observer.observe(section);
    });

    // Add animation for logo when page loads
    if (logoRef.current) {
      logoRef.current.classList.add('logo-animate');
    }
    
    return () => {
      sections.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <div id="overview" className="body-container">
      {/* Logo and Main Introduction */}
      <div className="logo-container" ref={logoRef}>
        <div className="logo">
          <div className="logo-mark">
            <div className="logo-bars"></div>
            <div className="logo-bars"></div>
            <div className="logo-bars"></div>
          </div>
          <div className="logo-text">
            <h1 className="lodha">LODHA</h1>
            <h2 className="massimo">MASSIMO</h2>
          </div>
        </div>
        <div className="main-description">
          <p>Presenting Lodha Massimo – an elevated lifestyle at Baner Hill's peaceful foothills. Escape city life while enjoying luxury in Pune's prime neighborhood, with a grand clubhouse, café, sports facilities, open green spaces, and modern comforts at home.</p>
        </div>
      </div>
      
      {/* First Section - Image Left, Content Right */}
      <section 
        ref={el => sections.current[0] = el}
        className="content-section"
      >
        <div className="image-container reveal-left">
          <img 
            src="https://www.lodhagroup.com/sites/default/files/2024-11/1st-USP-v.2.jpg" 
            alt="Luxurious balcony with seating area and mountain view" 
          />
        </div>
        <div className="content-container reveal-right">
          <h2 className="section-heading">Climbing higher in life has its perks. For starters, the view.</h2>
          <p>
            At Lodha Massimo, life by the hills means each day begins on a
            high note. Step onto your lavish sundeck to greet the majestic
            views and crisp, refreshing air. Enjoy afternoons with a good
            book and evenings filled with lively gatherings, bringing the hills
            alive with music and laughter.
          </p>
        </div>
      </section>
      
      {/* Second Section - Content Left, Image Right */}
      <section 
        ref={el => sections.current[1] = el}
        className="content-section reverse"
      >
        <div className="content-container reveal-left">
          <h2 className="section-heading">Many people live by the hills. Few in a beacon of luxury.</h2>
          <p>
            At Lodha Massimo, your elegant tower commands attention from
            the moment you arrive. With a grand lobby crafted from the
            finest materials and seamless floor lobbies leading to your
            private sanctuary, every detail—from façade to common areas—
            has been meticulously designed to elevate your living experience.
          </p>
        </div>
        <div className="image-container reveal-right">
          <img 
            src="https://www.lodhagroup.com/sites/default/files/2024-11/2nd-USP-v.2.jpg" 
            alt="Luxurious garden and pool area" 
          />
        </div>
      </section>
      
      {/* Third Section - Image Left, Content Right */}
      <section 
        ref={el => sections.current[2] = el}
        className="content-section"
      >
        <div className="image-container reveal-left">
          <img 
            src="https://www.lodhagroup.com/sites/default/files/2024-11/3rd-USP-v.2.jpg" 
            alt="Exterior view of Lodha Massimo" 
          />
        </div>
        <div className="content-container reveal-right">
          <h2 className="section-heading">Life at an elevated address.</h2>
          <p>
            Experience unparalleled luxury living with panoramic views of the 
            surrounding hills. Our premium residences offer spacious interiors, 
            high-quality finishes, and state-of-the-art amenities designed for 
            those who appreciate the finer things in life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Body;