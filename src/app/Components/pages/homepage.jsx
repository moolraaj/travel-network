import React from 'react'
import Slider from '../herosection'
import PopularDestinations from '../populardestination'
import TourPackages from '../tourpackages'
import TabTourPackages from '../tabtourpackages'
import AboutSection from '../aboutus'
import TestimonialsSection from '../testimonial'

const HomePage = () => {
  return (
    <>
    <Slider/>
   <PopularDestinations/>
   <TourPackages/>
   <TabTourPackages/>
   <AboutSection/>
   <TestimonialsSection/>
   </>
  );
};

export default HomePage;