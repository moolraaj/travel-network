'use client'

import { AllPackages } from "@/context/contextProviders"
 
import Link from "next/link"
import {   useContext } from "react"


function Footer({ result }) {
  let {destinations}=useContext(AllPackages)
  const handleClick = (name,image, index) => {
    localStorage.removeItem('destinationImage');
    localStorage.setItem('destinationImage', JSON.stringify({ name,image, index }));
};
  let { footer = {} } = result
  return (
    <>
      <section className="footer_section">
        <div className='footer_outer'>
          <div className="footer_inner_section container">
            <div className='footer-top'>

              <div className="footer_top_section_wrapper">

                <div className="footer_logo">
                  <Link href={'/'}>
                  <img src={footer?.siteLogoUrl} alt='footer_logo' />
                  </Link>
                  <div className="bottom_description">
                    <p>{footer?.textAfterLogo}</p>
                  </div>
                </div>


                <div className="footer_destinatins">
                  <h2 className="footer_heading">Destinations</h2>

                  <div className="footer_links">
                    <ul>
                      <li>
                        {destinations?.slice(0,6)?.map((e, index) =>
                          <li key={index}>
                            <Link href={`/destinations/${e?.slug}`} onClick={() => handleClick(e.name,e?.destination_image, index)}>{e?.name}</Link>
                          </li>
                        )}
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="other_links">
                  <h2 className="footer_heading">Other Links</h2>

                  <div className="footer_links">
                    <ul>
                      <li>
                        <Link href={'/privacy-policy'}>Privacy Policy</Link>
                       
                      </li>
                      <li>
                      <Link href={'/terms-and-conditions'}>Terms of Service</Link>
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="contact_us">
                <h2 className="footer_heading">Contact Us</h2>

                <div className="contact_details">
                  <ul>
                    <li>
                      <a href={`tel:+${footer?.phone_one}`}>{footer?.phone_one}</a>
                    </li>
                    <li>
                      <a href={`mailto:${footer?.emailAddress}`}>{footer?.emailAddress}</a>
                    </li>
                  </ul>
                </div>
                <h2 className="footer_heading">address</h2>
                <div className="address">
                  <p>{footer?.address}</p>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className='copyright_section'>
            <div className='copyright_bar_inner'>
              <p>{footer?.copyrightTextFirst}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer