import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-images">
          <img src="images/aboutusone.jpg" alt="Travel Image 1" />
          <img src="images/aboutustwo.jpg" alt="Travel Image 2" />
        </div>
        <div className="about-content">
          <h2>Explore the Globe with Travel Network!</h2>
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
  );
};

export default AboutSection;
