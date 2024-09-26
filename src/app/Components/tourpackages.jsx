// components/TourPackages.js

import React from 'react';

const TourPackages = () => {
  const data = {
    tourPackages: {
      title: "Tour Packages",
      description: "Vacations to make your experience enjoyable in India!",
      packages: [
        {
          name: "Tribal Tour For Kinnaur & Spiti",
          image: "https://example.com/tour1.jpg",
          alt: "Tribal Tour For Kinnaur & Spiti",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        },
        {
          name: "Majestic Kasol with Manali",
          image: "https://example.com/tour2.jpg",
          alt: "Majestic Kasol with Manali",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        },
        {
          name: "Mesmerizing Himachal",
          image: "https://example.com/tour3.jpg",
          alt: "Mesmerizing Himachal",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        },
        {
          name: "Exotic Jaipur Tour",
          image: "https://example.com/tour4.jpg",
          alt: "Exotic Jaipur Tour",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        }
      ]
    }
  };

  return (
    <div className="tour-packages">
      <h2>{data.tourPackages.title}</h2>
      <p>{data.tourPackages.description}</p>
      <div className="packages-grid">
        {data.tourPackages.packages.map((packageItem, index) => (
          <div className="package" key={index}>
            <img src={packageItem.image} alt={packageItem.alt} />
            <h3>{packageItem.name}</h3>
            <p>{packageItem.details}</p>
            <p><strong>{packageItem.duration}</strong> - From {packageItem.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
