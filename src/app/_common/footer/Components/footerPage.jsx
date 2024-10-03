"use client"

import React from 'react'
import Logosection from '../../footer/Components/logosection'
import Address from './address'


function FooterPage() {

   
   
  return (
    <div className='footer_outer'>
        <div className="footer_inner_section container">
          <div className='footer-top'>
            
            <div className="first_column">
              <Logosection/>
            </div>
            <div className="destinatins">
            <Address/>
            </div>
           
          </div>
      </div>
      <div className='copyright_bar'>
        <div className='copyright_bar_inner container'>© 2024 Travel Network | All Rights Reserved | Design By Spark web solution</div>
      </div>
    </div>
  )
}

export default FooterPage