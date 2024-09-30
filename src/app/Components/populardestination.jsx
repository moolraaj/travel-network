 

'use client'
import { AllPackages } from '@/context/contextProviders';
import React, { useContext } from 'react';

const PopularDestinations = () => {
  
  let {destinations}=useContext(AllPackages)

  return (
    <div className="container popular-destinations">
     <h2>Popular Destinations</h2>
     <p>Vacations to make your experience enjoyable in India!</p>
      <div className="destinations-grid">
      {destinations.slice(0,4).map((destination, index) => (
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
