'use client'
import { useContext } from "react"
import HighlightsSection from "./highlight"
import TourismInfoSection from "./tourism"
import { AllPackages } from "@/context/contextProviders"

 

function AboutPage() {
    let{aboutPage={}}=useContext(AllPackages) 
    let result=aboutPage[0]?.acf
  return (
     <>
     <TourismInfoSection result={result}/>
     <HighlightsSection result={result}/>

   
     </>
  )
}

export default AboutPage