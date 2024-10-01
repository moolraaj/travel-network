'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Use this in the app directory


function Navbar({ result }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const { header = {} } = result;

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

  // Get the current path
  const currentPath = router.pathname;
  
  // Debugging: Log the current path
  useEffect(() => {
    console.log("Current Path:", currentPath);
  }, [currentPath]);

  const pathname = usePathname(); // Get the current path

  // Normalize the pathname to avoid issues with trailing slashes, etc.
  const isActive = (path) => pathname === path || pathname === `${path}/`;

  return (
    <div className="container">
    <div className={`navbar inner ${isScrolled ? 'active' : ''}`}>
      <div className="navbar_wrapper">
        <div className="navbar_section_first">
          <Link href="/">
            <img src={header?.siteLogoUrl} alt="logo" />
          </Link>
        </div>
    <div className="navbar_section_second">
      <ul className="navbar">
        <li>
          <Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/about-us" className={isActive('/about') ? 'active' : ''}>About Us</Link>
        </li>
        <li>
          <Link href="/investor-corner" className={isActive('/investor-corner') ? 'active' : ''}>Investor’s Corner</Link>
        </li>
        <li>
          <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
        </li>
        <li>
          <Link href="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>Contact Us</Link>
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
