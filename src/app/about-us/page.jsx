import React from 'react'
import Breadcrumb from '../_common/breadcrumb/breadcrumb'
import TourismInfoSection from './components/tourism'
import HighlightsSection from './components/highlight'

const Page = () => {
  const title = 'Contact Us'
  const image = '/bread.jfif'
  return (
    <div>
        <Breadcrumb
          title={title}
          image={image}
        />
          <TourismInfoSection/>
          <HighlightsSection/>
         
       
    </div>
  )
}

export default Page