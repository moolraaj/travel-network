'use client';
import React, { useState, useEffect } from 'react';

const Slider = ({ result }) => {
 
  const slider = result[0]?.acf?.top_banner_gallery || [];  

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  useEffect(() => {
     
    if (slider.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);  
    }
  }, [slider]);  

  return (
    <div className="slider">
      {slider.length > 0 ? (  
        slider.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.banner_image})` }}
          >
            <h2>{slide.banner_heading}</h2>
            <p>{slide.heading_paragraph}</p>
            <a href={slide.banner_button_link}>
              <button>Book Now</button>
            </a>
          </div>
        ))
      ) : (
        <p>No slides available</p> 
      )}
      <button className="prev" onClick={prevSlide} disabled={slider.length === 0}>❮</button>
      <button className="next" onClick={nextSlide} disabled={slider.length === 0}>❯</button>
    </div>
  );
};

export default Slider;
