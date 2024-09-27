
import React from 'react';
import packagesbg from '../../../public/images/background.png';
const TourPackages = () => {
  const data = {
    tourPackages: {
      title: "Tour Packages",
      description: "Vacations to make your experience enjoyable in India!",
      packages: [
        {
          name: "Tribal Tour For Kinnaur & Spiti",
          image: "/images/destination-5.png",
          alt: "Tribal Tour For Kinnaur & Spiti",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        },
        {
          name: "Majestic Kasol with Manali",
          image:  "/images/destination-4.png",
          alt: "Majestic Kasol with Manali",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        },
        {
          name: "Mesmerizing Himachal",
          image: "/images/destination-3.png",
          alt: "Mesmerizing Himachal",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        },
        {
          name: "Exotic Jaipur Tour",
          image: "/images/destination-1.png",
          alt: "Exotic Jaipur Tour",
          details: "Exceptional Circuit of Leh Ladakh, Manali, and Lahaul to Chandigarh",
          duration: "3 Days / 2 Nights",
          price: "₹2000.00"
        }
      ]
    }
  };

  return (
  <div className='tour-packages-section'  style={{ backgroundImage: `url(${packagesbg.src})` }} >
    <div className="container tour-packages">
      <h2>{data.tourPackages.title}</h2>
      <p>{data.tourPackages.description}</p>
      <div className="packages-grid">
        {data.tourPackages.packages.map((packageItem, index) => (
          <div className="package" key={index}>
            <div className='packages-image'>
             <img src={packageItem.image} alt={packageItem.alt} />
            </div>
            <div class="packages-inner-txt">
              <h3>{packageItem.name}</h3>
              <p>{packageItem.details}</p>
              <div className='days-night'><strong>{packageItem.duration}</strong> <p> <span> From </span> {packageItem.price}  </p></div>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default TourPackages;
