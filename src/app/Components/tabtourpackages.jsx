'use client'
import { useState } from 'react';

const tourData = {
  categories: [
    { label: "Adventure", value: "adventure" },
    { label: "Honeymoon", value: "honeymoon" },
    { label: "Corporate", value: "corporate" },
    { label: "Family", value: "family" },
    { label: "Weekends", value: "weekends" },
    { label: "Groups", value: "groups" }
  ],
  packages: [
    {
      title: "Exotic Weekend Tour In Manali",
      route: "Delhi - Manali - Solang Valley",
      duration: "3 Days / 4 Night",
      price: "₹25,767",
      originalPrice: "₹27,000",
      imageUrl: "/images/paragliding.jpg"
    },
    {
      title: "Exotic Weekend Tour In Manali",
      route: "Delhi - Manali - Solang Valley",
      duration: "3 Days / 4 Night",
      price: "₹25,767",
      originalPrice: "₹27,000",
      imageUrl: "/images/balloon.jpg"
    },
    {
      title: "Exotic Weekend Tour In Manali",
      route: "Delhi - Manali - Solang Valley",
      duration: "3 Days / 4 Night",
      price: "₹25,767",
      originalPrice: "₹27,000",
      imageUrl: "/images/snow_trekking.jpg"
    }
  ]
};

const TabTourPackages = () => {
  const [selectedCategory, setSelectedCategory] = useState('adventure');

  return (
    <div className="container">
      <h2 className="heading">Specialized Holiday Travel Tour Packages</h2>
      <p className="subheading">Vacations to make your experience enjoyable in India!</p>

      {/* Categories */}
      <div className="tabContainer">
        {tourData.categories.map((category) => (
      <button
      key={category.value}
      className={`tab ${selectedCategory === category.value ? 'active' : ''}`}
      onClick={() => setSelectedCategory(category.value)}
    >
      {category.label}
    </button>
    
        ))}
      </div>

      {/* Packages */}
      <div className="packagesContainer">
        {tourData.packages.map((pkg, index) => (
          <div key={index} className="packageCard">
            <img src={pkg.imageUrl} alt={pkg.title} className="packageImage" />
            <h3 className="packageTitle">{pkg.title}</h3>
            <p className="packageRoute">{pkg.route}</p>
            <p className="packageDuration">{pkg.duration}</p>
            <p className="packagePrice">
              From: {pkg.price} <span className="originalPrice">{pkg.originalPrice}</span>
            </p>
            <button className="bookButton">Book Now</button>
          </div>
        ))}
      </div>

      <button className="viewMoreButton">View More</button>
    </div>
  );
};

export default TabTourPackages;
