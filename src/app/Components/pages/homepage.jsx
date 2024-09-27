'use client'
import React, { useContext, useEffect, useState } from 'react'
import Slider from '../herosection'
import PopularDestinations from '../populardestination'
import TourPackages from '../tourpackages'
import TabTourPackages from '../tabtourpackages'
import AboutSection from '../aboutus'
import TestimonialsSection from '../testimonial'
import { EXPORT_ALL_APIS } from '@/utils/api/apis'
import { AllPackages } from '@/context/contextProviders'

const HomePage = () => {
  let {destinations,allPackages}=useContext(AllPackages)
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
   <PopularDestinations destinations={destinations}/>
   <TourPackages  allPackages={allPackages}/>
   <TabTourPackages/>
   <AboutSection result={result}/>
   <TestimonialsSection result={result}/>
   </>
  );
};

export default HomePage;