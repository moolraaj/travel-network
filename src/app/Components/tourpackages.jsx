
'use client'
import React, { useContext, useState } from 'react';
import packagesbg from '../../../public/images/background.png';
import { AllPackages } from '@/context/contextProviders';
import BookingForm from './bookingForm';
 

const TourPackages = () => {
  let[isOpen,setIsOpen]=useState(false)
  const data = {
    tourPackages: {
      title: "Tour Packages",
      description: "Vacations to make your experience enjoyable in India!",
  
    }
  };

  let { allPackages } = useContext(AllPackages)

  return (
    <>
    {isOpen&&<BookingForm setIsOpen={setIsOpen}/>}
    
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
                    <p>{packageItem?.package_description}</p>
                    <div className="days-night">
                      <strong>Days {packageItem.package_days} / Nights {packageItem.packages_nights}</strong>
                      <p><span>From</span> {packageItem.package_price}</p>
                    </div>
                    <button onClick={()=>setIsOpen(true)}>Book Now</button>
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
    </>
  );
};

export default TourPackages;
