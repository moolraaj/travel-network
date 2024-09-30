'use client';
import { useState, useEffect } from 'react';

const TestimonialsSection = ({ result }) => {
  const testimonials = result[0]?.acf?.testimonial_section || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsToShow = 2; // Show 2 cards on larger screens

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + cardsToShow) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - cardsToShow + testimonials.length) % testimonials.length
    );
  };

  // Function to go to a specific slide based on dot click
  const goToSlide = (index) => {
    setCurrentIndex(index * cardsToShow);
  };

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [testimonials]);

  // Determine how many cards to show based on screen size
  const getCardsToShow = () => {
    return window.innerWidth >= 1024 ? 2 : 1;
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0); // Reset to the first slide on resize
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="container testimonials-section">
      <h2>What Our Users Say</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className="testimonialslider">
        <div className="testimonial-cards-section">
          {testimonials.length > 0 ? (
            <>
              {/* Render first card */}
              <div className="testimonial-card" key={currentIndex}>
                <img
                  src={testimonials[currentIndex]?.testi_image || ''}
                  alt={testimonials[currentIndex]?.testi_name || ''}
                />
                <h3>{testimonials[currentIndex]?.testi_name || ''}</h3>
                <p>{testimonials[currentIndex]?.testi_description || ''}</p>
                <div className="stars">
                  {Array(testimonials[currentIndex]?.rating || 0)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                </div>
              </div>
              {/* Render second card only on desktop */}
              {getCardsToShow() === 2 && (
                <div className="testimonial-card" key={currentIndex + 1}>
                  <img
                    src={testimonials[(currentIndex + 1) % testimonials.length]?.testi_image || ''}
                    alt={testimonials[(currentIndex + 1) % testimonials.length]?.testi_name || ''}
                  />
                  <h3>{testimonials[(currentIndex + 1) % testimonials.length]?.testi_name || ''}</h3>
                  <p>{testimonials[(currentIndex + 1) % testimonials.length]?.testi_description || ''}</p>
                  <div className="stars">
                    {Array(testimonials[(currentIndex + 1) % testimonials.length]?.rating || 0)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <p>No testimonials available.</p>
          )}
        </div>
      </div>
      <div className="dots-container">
        {Array(Math.ceil(testimonials.length / cardsToShow))
          .fill()
          .map((_, index) => (
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
