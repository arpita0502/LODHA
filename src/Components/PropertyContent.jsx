import React from 'react';
import { FaTree, FaSwimmingPool, FaVolleyballBall, FaTableTennis, FaFootballBall } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';
import './PropertyContent.css';

const PropertyContent = () => {
  return (
    <  div id="amenities" className="property-content">
      <div className="main-content">
        <div className="content-left">
          <h1 className="main-heading">Vast open spaces. Naturally, you live on a hill.</h1>
          <p className="main-description">
            At the highest level, The Sky Sports Club offers top-notch facilities for sports enthusiasts. Gather 
            your family for a game of the latest craze – Padel ball, or invite your peers for a friendly game of 
            5-a-side football. There's something here for everyone.
          </p>
          <div className="possession-status">
            <p>POSSESSION: UNDER CONSTRUCTION</p>
          </div>
        </div>

        {/* <div className="image-gallery">
          <img src="https://www.lodhagroup.com/sites/default/files/projects/gallery/Amenity%201_374x374.jpg" alt="Temple" className="gallery-image" />
          <img src={landscapeImage} alt="Landscape" className="gallery-image" />
          <img src={poolImage} alt="Swimming Pool" className="gallery-image" />
        </div> */}
        
        <div className="amenities-list">
          <div className="amenity-item">
            <span className="amenity-icon"><FaTree className="icon" /></span>
            <p className="amenity-text">Central Landscape (Almost 100,000 sq. ft.)</p>
          </div>
          
          <div className="amenity-item">
            <span className="amenity-icon"><FaSwimmingPool className="icon" /></span>
            <p className="amenity-text">Swimming Pools - 25 m Lap Pool - Kids Pool</p>
          </div>
          
          <div className="amenity-item">
            <span className="amenity-icon"><FaVolleyballBall className="icon" /></span>
            <p className="amenity-text">Sky Sports Club</p>
          </div>
          
          <div className="amenity-item">
            <span className="amenity-icon"><FaVolleyballBall className="icon" /></span>
            <p className="amenity-text">3 Badminton Courts (can be used for Basketball / Volleyball / Pickleball)</p>
          </div>
          
          <div className="amenity-item">
            <span className="amenity-icon"><FaTableTennis className="icon" /></span>
            <p className="amenity-text">Padelball Court</p>
          </div>
          
          <div className="amenity-item">
            <span className="amenity-icon"><FaFootballBall className="icon" /></span>
            <p className="amenity-text">Football Turf (5-a-side)</p>
          </div>
          
          <div className="amenity-item">
            <span className="amenity-icon"><GiCricketBat className="icon" /></span>
            <p className="amenity-text">Cricket Pitch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyContent;