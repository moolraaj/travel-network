 
import { FaTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

function Header() {

  return (
    <>
    <div className="header_outer">
      <div className="header_inner">
        <div className="header_wrapper">
          <div className="header_left-section">
            <ul>
              <li><a href="mailto:">  <FaEnvelope size={30} />demo@gmail.com</a></li>
              <li><a href="tel:+">        <FaPhone size={30} />
              9999999999</a></li>
            </ul>
          </div>
          <div className="header_left_section">
            <ul>
              <li><a href="#"><FaTwitter size={30} /></a></li>
              
              <li><a href="#"><FaInstagram size={30} /></a></li>
              

              <li><a href="#"> <FaFacebook size={30} /></a></li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header