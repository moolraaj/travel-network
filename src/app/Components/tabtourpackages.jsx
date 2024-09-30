'use client'
import { AllPackages } from '@/context/contextProviders';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import { useContext, useEffect, useState } from 'react';

 

const TabTourPackages = () => {
  const api = EXPORT_ALL_APIS();
  const { categories = [] } = useContext(AllPackages);

  const [selectedCategory, setSelectedCategory] = useState(null);  
  const [packages, setPackages] = useState([]);

 
  const fetchPackages = async (slug) => {
    try {
      const resp = await api.fetchCategoriesFilterPackages(slug);  
      setPackages(resp);  
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  
  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategorySlug = categories[0].slug;  
      setSelectedCategory(defaultCategorySlug); 
      fetchPackages(defaultCategorySlug);  
    }
  }, [categories]);

  
  useEffect(() => {
    if (selectedCategory) {
      fetchPackages(selectedCategory);
    }
  }, [selectedCategory]);

  const result = packages?.flatMap((e) => e?.acf?.all_packages || []);


  return (
    <div className="container tab-tour-packages">
      <h2>Specialized Holiday Travel Tour Packages</h2>
      <p>Vacations to make your experience enjoyable in India!</p>
      <div className='packages-container-box'> 
        
        <div className="tab-Container">
            {categories.slice(0, 7).map((category, index) => (
          <button
            key={index}
            className={`tab-packages ${selectedCategory === category.slug ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.slug)}
          >
            {category.name}
          </button>
        ))}
        </div>
        <div className="packagesContainer">
        {result === undefined || result.length === 0 ? (
          <p>No packages found for this category.</p>
        ) : (
          result.map((pkg, index) => (
            <div key={index} className="packageCard">
              <img src={pkg.package_image} alt={pkg.package_title} className="packageImage" />
              <h3 className="packageTitle">{pkg.package_title}</h3>
              <p className="packageRoute">{pkg.package_root}</p>
              <p className="packageDuration">{pkg.package_duration}</p>
              <p className="packagePrice">
                From: {pkg.package_price} <span className="originalPrice">{pkg.original_price}</span>
              </p>
              <button className="bookButton">Book Now</button>
            </div>
          ))
        )}
      </div>

      <button className="viewMoreButton">View More</button>




      </div>
    </div>
  );
};

export default TabTourPackages;
