'use client'
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "N.K Hansson",
    image: "/path-to-image1", // Replace with the actual path to the image
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    rating: 5,
  },
  {
    name: "A. Johnson",
    image: "/path-to-image2", // Replace with the actual path to the image
    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
    rating: 4,
  },
  {
    name: "B. Smith",
    image: "/path-to-image3", // Replace with the actual path to the image
    review: "Excellent service and great experience overall!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className="slider">
        <button onClick={prevSlide}>Prev</button>
        <div className="testimonial-card">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
          <h3>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].review}</p>
          <div className="stars">
            {Array(testimonials[currentIndex].rating)
              .fill()
              .map((_, i) => (
                <span key={i}>⭐</span>
              ))}
          </div>
        </div>
        <button onClick={nextSlide}>Next</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
