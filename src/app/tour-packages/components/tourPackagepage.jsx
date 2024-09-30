'use client'
import React, { useContext } from 'react'
import TourDetails from './tourdetails'
import TopBanner from '@/app/Components/topBanner'
import { AllPackages } from '@/context/contextProviders'

function TourPackagepage() {
    let {allPackages}=useContext(AllPackages)
    console.log(allPackages)
  return (
     <>
     <TopBanner/>
     <TourDetails/>
     </>
  )
}

export default TourPackagepage