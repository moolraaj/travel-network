
import AboutSection from "./Components/aboutus";
import Slider from "./Components/herosection";
import PopularDestinations from "./Components/populardestination";
import TabTourPackages from "./Components/tabtourpackages";
import TestimonialsSection from "./Components/testimonial";
import TourPackages from "./Components/tourpackages";

export default function Home() {
  return (
   <>
     <Slider/>
   <PopularDestinations/>
   <TourPackages/>
   <TabTourPackages/>
   <AboutSection/>
   <TestimonialsSection/>
   </>
  )
}