import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function Navbar({ result }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let { header = {} } = result;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);  
    };
  }, []);

  return (
    <div className="container">
      <div className={`navbar inner ${isScrolled ? 'active' : ''}`}>
        <div className="navbar_wrapper">
          <div className="navbar_section_first">
            <Link href={'/'}>
              <img src={header?.siteLogoUrl} alt="logo" />
            </Link>
          </div>
          <div className={`navbar_section_second ${isMenuOpen ? 'active' : ''}`}>
            <ul className="navbar">
              <li>
                <Link href={'/'} className={location.pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/about-us'} className={location.pathname === '/about-us' ? 'active' : ''}>
                  About
                </Link>
              </li>
              <li>
                <Link href={'/tour-packages'} className={location.pathname === '/tour-packages' ? 'active' : ''}>
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href={'/destinations'} className={location.pathname === '/destinations' ? 'active' : ''}>
                  Destinations
                </Link>
              </li>
              <li>
                <Link href={'/plan-your-trip'} className={location.pathname === '/plan-your-trip' ? 'active' : ''}>
                  Plan Your Trip
                </Link>
              </li>
              <li>
                <Link href={'/contact-us'} className={location.pathname === '/contact-us' ? 'active' : ''}>
                  Contact Us
                </Link>
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
