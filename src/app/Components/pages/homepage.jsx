'use client'
import React, {  useEffect, useState } from 'react'
import Slider from '../herosection'
import PopularDestinations from '../populardestination'
import TourPackages from '../tourpackages'
import TabTourPackages from '../tabtourpackages'
import AboutSection from '../aboutus'
import TestimonialsSection from '../testimonial'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'
 

const HomePage = () => {

  let api=EXPORT_ALL_APIS()
  let [result,setResult]=useState([])
 

  useEffect(()=>{

    let loadHomePage=async()=>{
      let resp=await api.fetchHomePage()
      setResult(resp)
    }
     
    loadHomePage()
 
  },[])
  return (
    <>
    <Slider result={result}/>
   <PopularDestinations  />
   <TourPackages   />
   <TabTourPackages/>
   <AboutSection result={result}/>
   <TestimonialsSection result={result}/>
   </>
  );
};

export default HomePage;