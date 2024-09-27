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
          image: "/images/destination-1.png",
          alt: "Manali"
        },
        {
          name: "Spiti",
          image: "/images/destination-2.png",
          alt: "Spiti"
        },
        {
          name: "Mandi",
          image: "/images/destination-3.png",
          alt: "Mandi"
        },
        {
          name: "Shimla",
          image: "/images/destination-4.png",
          alt: "Shimla"
        },
        {
          name: "Kullu",
          image: "/images/destination-5.png",
          alt: "Kullu"
        }
      ]
    }
  };

  return (
    <div className="container popular-destinations">
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
