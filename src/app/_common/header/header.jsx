
import { FaTwitter, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaYoutube } from 'react-icons/fa';

const iconMap = {
  facebook: <FaFacebook size={30} />,
  twitter: <FaTwitter size={30} />,
  instagram: <FaInstagram size={30} />,
  youtube: <FaYoutube size={30} />,
};


 

function Header({ result }) {
  let { header = {} } = result

  return (
    <>
      <div className="header_outer container">
        <div className="header_inner">
          <div className="header_wrapper">
            <div className="header_left_section">
              <ul>
                <li><a href={`mailto:${header?.emailAddress}`}>  <FaEnvelope size={30} />{header?.emailAddress}</a></li>
                <li><a href={`tel:${header?.phone_one}`}>        <FaPhone size={30} />{header?.phone_one}
                </a></li>
              </ul>
            </div>
            <div className="header_right_section">
              <ul>
                {header?.socialLinks?.map((ele, index) => {
                  return <li key={index}><a href={`${ele?.iconUrl}`} target='_blank'>  {iconMap[ele.iconName] || null} </a></li>
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header