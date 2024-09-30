import Link from 'next/link'
import React, { useState } from 'react'

function Navbar({ result }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  let { header = {} } = result

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="container">
        <div className="navbar inner">
          <div className="navbar_wrapper">
            <div className="navbar_section_first">
              <Link href={'/'}>
                <img src={header?.siteLogoUrl} alt="logo" />
              </Link>
            </div>
            <div className={`navbar_section_second ${isMenuOpen ? 'active' : ''}`}>
              <ul className="navbar">
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/about-us'}>about</Link></li>
                <li><Link href={'/tour-packages'}>tour packages</Link></li>
                <li><Link href={'/destinations'}>destinations</Link></li>
                <li><Link href={'/plan-your-trip'}>plan your trip</Link></li>
                <li><Link href={'/contact-us'}>contact us</Link></li>
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
    </>
  )
}

export default Navbar
