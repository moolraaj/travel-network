import React from 'react'
import Breadcrumb from '../_common/breadcrumb/breadcrumb'
import TourDetails from './components/tourdetails'


const Page = () => {
  const title = 'Contact Us'
  const image = '/bread.jfif'
  return (
    <div>
      <Breadcrumb/>
       <TourDetails/>
       
    </div>
  )
}

export default Page