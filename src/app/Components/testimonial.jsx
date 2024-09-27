'use client';
import { useState, useEffect } from 'react';

const TestimonialsSection = ({ result }) => {
 
  const testimonials = result[0]?.acf?.testimonial_section || [];
  
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

 
  useEffect(() => {
    if (testimonials.length > 0) {  
      const interval = setInterval(nextSlide, 3000); 
      return () => clearInterval(interval);  
    }
  }, [testimonials]);  

  return (
    <section className="testimonials-section">
      <h2>What Our Users Say</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className="slider">
        <button onClick={prevSlide} disabled={testimonials.length === 0}>Prev</button>
        <div className="testimonial-card">
          {testimonials.length > 0 ? (
            <>
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
            </>
          ) : (
            <p>No testimonials available.</p>  
          )}
        </div>
        <button onClick={nextSlide} disabled={testimonials.length === 0}>Next</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
