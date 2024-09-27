// components/PopularDestinations.js

import React from 'react';

const PopularDestinations = ({destinations}) => {
  
  return (
    <div className="popular-destinations">
      <h2>Popular Destinations</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div className="destination" key={index}>
            <img src={destination?.destination_image||'no image found'} alt={destination.alt} />
            <h3>{destination.name}</h3>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default PopularDestinations;
