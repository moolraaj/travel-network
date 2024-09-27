'use client';
import { AllPackages } from '@/context/contextProviders';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import { useContext, useEffect, useState } from 'react';

const TabTourPackages = () => {
  const api = EXPORT_ALL_APIS();
  const { categories = [] } = useContext(AllPackages);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.slug);
  const [packages, setPackages] = useState([]);

   
  const fetchPackages = async (slug) => {
      const resp = await api.fetchCategoriesFilterPackages(slug);  
      setPackages(resp);  
  };

  
  useEffect(() => {
    fetchPackages(selectedCategory);
  }, [selectedCategory]);

  
  const result = packages?.flatMap((e) => e?.acf?.all_packages || []);

  console.log(`result`)
  console.log(result)
  

  return (
    <div className="container">
      <h2 className="heading">Specialized Holiday Travel Tour Packages</h2>
      <p className="subheading">Vacations to make your experience enjoyable in India!</p>

      
      <div className="tabContainer">
        {categories.slice(0,7).map((category, index) => (
          <button
            key={index}
            className={`tab ${selectedCategory === category.slug ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.slug)} 
          >
            {category.name}
          </button>
        ))}
      </div>

    
      <div className="packagesContainer">
        {result===undefined||result.length===0?('no packages found this relative category')
          :(result?.map((pkg, index) => (
            <div key={index} className="packageCard">
              <img src={pkg.package_image} alt={pkg.package_title} className="packageImage" />
              <h3 className="packageTitle">{pkg.package_title}</h3>
              <p className="packageRoute">{pkg.package_route}</p>
              <p className="packageDuration">{pkg.package_duration}</p>
              <p className="packagePrice">
                From: {pkg.package_price} <span className="originalPrice">{pkg.package_price}</span>
              </p>
              <button className="bookButton">Book Now</button>
            </div>
          )))
       }
      </div>

      <button className="viewMoreButton">View More</button>
    </div>
  );
};

export default TabTourPackages;
