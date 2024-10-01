
'use client'
import React, { useContext } from 'react';
import packagesbg from '../../../public/images/background.png';
import { AllPackages } from '@/context/contextProviders';
import Link from 'next/link';

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
          image: "/images/destination-4.png",
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

  let { allPackages } = useContext(AllPackages)

  console.log(allPackages)










  return (
    <div className='tour-packages-section' style={{ backgroundImage: `url(${packagesbg.src})` }} >
      <div className="container tour-packages">
        <h2>{data.tourPackages.title}</h2>
        <p>{data.tourPackages.description}</p>
        <div className="packages-grid">
          {allPackages?.map((packageGroup, groupIndex) => {
            const packagesArray = packageGroup?.acf?.all_packages;
            if (Array.isArray(packagesArray)) {
              return packagesArray.map((packageItem, index) => (
                <div className="package" key={`${groupIndex}-${index}`}>
                  <div className="packages-image">
                    <img src={packageItem.package_image} alt={packageItem.package_title} />
                  </div>
                  <div className="packages-inner-txt">
                    <h3>{packageItem?.package_title}</h3>
                    <p>
                      {packageItem?.package_description?.length > 60
                        ? `${packageItem.package_description.slice(0, 60)}...`
                        : packageItem.package_description}
                    </p>
                    <div className="days-night">
                      <strong>Days {packageItem.package_days} / Nights {packageItem.packages_nights}</strong>
                      <p><span>From</span> {packageItem.package_price}</p>
                    </div>
                    <button>Book Now</button>
                  </div>
                </div>
              ));
            } else {
              
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default TourPackages;
