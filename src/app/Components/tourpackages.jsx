
'use client'
import React, { useContext } from 'react';
import packagesbg from '../../../public/images/background.png';
import { AllPackages } from '@/context/contextProviders';

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

  let {allPackages}=useContext(AllPackages)

 

  const result = allPackages?.flatMap((e) => e?.acf?.all_packages || []);
 

  

   

  return (
  <div className='tour-packages-section'  style={{ backgroundImage: `url(${packagesbg.src})` }} >
    <div className="container tour-packages">
      <h2>{data.tourPackages.title}</h2>
      <p>{data.tourPackages.description}</p>
      <div className="packages-grid">
        {result?.map((packageItem, index) => (
          <div className="package" key={index}>
            <div className='packages-image'>
             <img src={packageItem.package_image} alt={packageItem.package_title} />
            </div>
            <div class="packages-inner-txt">
              <h3>{packageItem?.package_title}</h3>
              <p>{packageItem?.package_description}</p>
              <div className='days-night'><strong>Days {packageItem.package_days}/ Nights {packageItem.packages_nights}</strong> <p> <span> From </span> {packageItem.package_price}  </p></div>
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
