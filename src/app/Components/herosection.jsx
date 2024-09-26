'use client'
import React, { useState, useEffect } from 'react';

const Slider = () => {
  const slides = [
    {
      heading: "Slide 1",
      description: "This is the first slide description.",
      buttonText: "Learn More",
      buttonLink: "/learn-more-1",
      backgroundImage: "/images/sliderone.jpg", // Replace with your image path
    },
    {
      heading: "Slide 2",
      description: "This is the second slide description.",
      buttonText: "Learn More",
      buttonLink: "/learn-more-2",
      backgroundImage: "/images/slidertwo.jpg",
    },
    {
      heading: "Slide 3",
      description: "This is the third slide description.",
      buttonText: "Learn More",
      buttonLink: "/learn-more-3",
      backgroundImage: "/images/sliderthree.jpg",
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
          <h2>{slide.heading}</h2>
          <p>{slide.description}</p>
          <a href={slide.buttonLink}>
            <button>{slide.buttonText}</button>
          </a>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Slider;
