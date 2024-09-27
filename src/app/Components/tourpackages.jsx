
'use client'
import { AllPackages } from '@/context/contextProviders';
import React, { useContext } from 'react';

const TourPackages = () => {

  let {allPackages}=useContext(AllPackages)
 
  const result = allPackages.flatMap((e) => e?.acf?.all_packages || []);

 

  return (
    <div className="tour-packages">
      <h2>Tour Packages</h2>
      <p>Vacations to make your experience enjoyable in India!</p>

      <div className="packages-grid">
        { 
          result.map((packageItem, index) => (
            <div className="package" key={index}>
              
              <img 
                src={packageItem?.package_image  } 
                alt={packageItem?.package_title } 
              />
              <h3>{packageItem?.package_title}</h3>
              <p>{packageItem?.package_overview}</p>
              <p>
                <strong>{packageItem?.package_days}</strong> - From {packageItem?.package_price || 'Price not available'}
              </p>
              <button>Book Now</button>
            </div>
          ))
         }
      </div>
    </div>
  );
};

export default TourPackages;
