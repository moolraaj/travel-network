'use client'
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      heading: "Enjoy The Most Enjoyable Journey",
      description: "Tour an international travel management company with 25 years of experience,  specializing in business and maritime travel.",
      buttonText: "Book Now",
      buttonLink: "/learn-more-1",
      backgroundImage: "/images/slide-one.png",
    },
    {
      heading: "Explore  beauty of the whole world",
      description: "Tour an international travel management company with 25 years of experience,  specializing in business and maritime travel.",
      buttonText: "Book Now",
      buttonLink: "/learn-more-2",
      backgroundImage: "/images/slide-two.png",
    },
    {
      heading: "Enjoy The Most Enjoyable Journey",
      description: "Tour an international travel management company with 25 years of experience,  specializing in business and maritime travel.",
      buttonText: "Book Now",
      buttonLink: "/learn-more-3",
      backgroundImage: "/images/slide-three.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-scroll effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.backgroundImage})` }}
        >
           <div className="overlay"></div>
            <div className="container hero-section-txt"> 
              <h2>{slide.heading}</h2>
              <p>{slide.description}</p>
              <a href={slide.buttonLink}>
                <button>{slide.buttonText}</button>
              </a>
            </div>
          
        </div>
      ))}
      {/* <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button> */}
    </div>
  );
};

export default Slider;
