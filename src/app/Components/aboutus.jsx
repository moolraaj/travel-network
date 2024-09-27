import React from 'react';
import packagesbg from '../../../public/images/background.png';
const data = {
  aboutus: {
    title: "About Us",
    description: "Vacations to make your experience enjoyable in India!",
  }
}
const AboutSection = () => {
  return (
    <div className='aboutus-bg'  style={{ backgroundImage: `url(${packagesbg.src})` }}>
      <section className="container about-section">
      <h2>{data.aboutus.title}</h2>
        <div className="about-container">
          <div className="about-images">
            <img src="/images/about-images.png" alt="Travel Image 1" />
          </div>
          <div className="about-content">
            <h3>Explore the Globe with Travel Network!</h3>
            <p>
              Welcome to Travel Network, your trusted partner for unforgettable
              travel experiences. We’re passionate about helping you create
              memories that last a lifetime. Travel opens up a world of endless
              possibilities, allowing us to explore new cultures, landscapes, and
              experiences. Whether it’s wandering through bustling city streets,
              hiking scenic mountains, or relaxing on serene beaches, every
              destination offers its own unique charm.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
