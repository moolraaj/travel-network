'use client';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "N.K Hansson",
    image:  "/images/holiday-1.png", 
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    rating: 5,
  },
  {
    name: "A. Johnson",
    image:  "/images/holiday-1.png", 
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    rating: 4,
  },
  {
    name: "B. Smith",
    image:  "/images/holiday-1.png", 
    review: "Excellent service and great experience overall!",
    rating: 5,
  },
  {
    name: "C. Davis",
    image:  "/images/holiday-2.png", 
    review: "Amazing trip and very well organized.",
    rating: 5,
  },
  {
    name: "D. Johnson",
    image:  "/images/holiday-3.png", 
    review: "Highly recommend! Will book again.",
    rating: 4,
  },
  {
    name: "A. Johnson",
    image:  "/images/holiday-1.png", 
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 2; // Number of testimonials to show at once

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow < testimonials.length ? prevIndex + cardsToShow : 0
    );
  };

 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - cardsToShow : prevIndex - cardsToShow
    );
  };

  // Function to go to a specific slide based on dot click
  const goToSlide = (index) => {
    setCurrentIndex(index * cardsToShow);
  };

  // Auto-slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <section className="container testimonials-section">
      <h2>What Our Users Say</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className="testimonialslider">
        {/* <button onClick={prevSlide}>Prev</button> */}
        <div className="testimonial-cards-section ">
          {testimonials.slice(currentIndex, currentIndex + cardsToShow).map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
              <div className="stars">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <span key={i}>★ </span>
                    
                  ))}
              </div>
            </div>
          ))}
        </div>
        {/* <button onClick={nextSlide}>Next</button> */}
      </div>
      <div className="dots-container">
        {Array(Math.ceil(testimonials.length / cardsToShow)).fill().map((_, index) => (
          <span
            key={index}
            className={`dot ${index * cardsToShow === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
