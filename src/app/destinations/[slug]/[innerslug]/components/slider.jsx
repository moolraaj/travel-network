
import React, { useEffect, useState } from 'react';

function Slider({ response }) {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % response?.packages_galleries.length);
  };

   
  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + response?.packages_galleries.length) % response?.packages_galleries.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3500);  

    return () => clearInterval(slideInterval);  
  }, [response?.packages_galleries.length]);

  

  return (
    <>
     
     <div className="Slider_outer_wrapper">

          <div className="package_slug_wrapper">
            <div className="package_gallery">
              <img src={response?.packages_galleries[currentSlide]} alt="gallery" />
            </div>
          </div>
          <div className="slider_buttons">

          <button onClick={prevSlide} className="slider-button prev-button">Prev</button>
          <button onClick={nextSlide} className="slider-button next-button">Next</button>
          </div>
     </div>
  
      
       
    </>
  );
}

export default Slider;
