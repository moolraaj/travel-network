 
import { FaTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';


function Header({data}) {
  let{header}=data.data
  console.log(header)

   

  return (
    <>
    <div className="header_outer container">
      <div className="header_inner">
        <div className="header_wrapper">
          <div className="header_left_section">
            <ul>
              <li><a href={`mailto:${header.emailAddress}`}>  <FaEnvelope size={30} />{header.emailAddress}</a></li>
              <li><a href={`tel:${header.phone_one}`}>        <FaPhone size={30} />
              {header.phone_one}</a></li>
            </ul>
          </div>
          <div className="header_right_section">
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