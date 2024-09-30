import React, { useState, useEffect } from 'react';

function Navbar({ result }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let { header = {} } = result;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll and add/remove "active" class
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up
    };
  }, []);

  return (
    <div className="container">
      <div className={`navbar inner ${isScrolled ? 'active' : ''}`}>
        <div className="navbar_wrapper">
          <div className="navbar_section_first">
            <a href={'/'}>
              <img src={header?.siteLogoUrl} alt="logo" />
            </a>
          </div>
          <div className={`navbar_section_second ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar">
              <li>
                <a href={'/'} className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </a>
              </li>
              <li>
                <a href={'/about-us'} className={location.pathname === '/about-us' ? 'active' : ''}>
                  About
                </a>
              </li>
              <li>
                <a href={'/tour-packages'} className={location.pathname === '/tour-packages' ? 'active' : ''}>
                  Tour Packages
                </a>
              </li>
              <li>
                <a href={'/destinations'} className={location.pathname === '/destinations' ? 'active' : ''}>
                  Destinations
                </a>
              </li>
              <li>
                <a href={'/plan-your-trip'} className={location.pathname === '/plan-your-trip' ? 'active' : ''}>
                  Plan Your Trip
                </a>
              </li>
              <li>
                <a href={'/contact-us'} className={location.pathname === '/contact-us' ? 'active' : ''}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar_section_third">
            <button>Book now</button>
          </div>
          <button className="toggle_button" onClick={toggleMenu}>
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
