// components/PopularDestinations.js

import React from 'react';

const PopularDestinations = () => {
  const data = {
    popularDestinations: {
      title: "Popular Destinations",
      description: "Vacations to make your experience enjoyable in India!",
      destinations: [
        {
          name: "Manali",
          image: "https://example.com/manali.jpg",
          alt: "Manali"
        },
        {
          name: "Spiti",
          image: "https://example.com/spiti.jpg",
          alt: "Spiti"
        },
        {
          name: "Mandi",
          image: "https://example.com/mandi.jpg",
          alt: "Mandi"
        },
        {
          name: "Shimla",
          image: "https://example.com/shimla.jpg",
          alt: "Shimla"
        },
        {
          name: "Kullu",
          image: "https://example.com/kullu.jpg",
          alt: "Kullu"
        }
      ]
    }
  };

  return (
    <div className="popular-destinations">
      <h2>{data.popularDestinations.title}</h2>
      <p>{data.popularDestinations.description}</p>
      <div className="destinations-grid">
        {data.popularDestinations.destinations.map((destination, index) => (
          <div className="destination" key={index}>
            <img src={destination.image} alt={destination.alt} />
            <h3>{destination.name}</h3>
          </div>
        ))}
      </div>    
    </div>
  );
};

export default PopularDestinations;
