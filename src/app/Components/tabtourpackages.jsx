'use client';
import { AllPackages } from '@/context/contextProviders';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import { useContext, useEffect, useState } from 'react';

const TabTourPackages = () => {
  const api = EXPORT_ALL_APIS();
  const { categories = [] } = useContext(AllPackages);

  const [selectedCategory, setSelectedCategory] = useState(null); // Initially null
  const [packages, setPackages] = useState([]);

  // Fetch packages based on the selected category
  const fetchPackages = async (slug) => {
    try {
      const resp = await api.fetchCategoriesFilterPackages(slug);  
      setPackages(resp);  
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  // Set default selected category and fetch packages when categories are available
  useEffect(() => {
    if (categories.length > 0) {
      const defaultCategorySlug = categories[0].slug; // Set the first category as default
      setSelectedCategory(defaultCategorySlug); // Update state
      fetchPackages(defaultCategorySlug); // Fetch packages for the default category
    }
  }, [categories]);

  // Fetch packages whenever selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      fetchPackages(selectedCategory);
    }
  }, [selectedCategory]);

  const result = packages?.flatMap((e) => e?.acf?.all_packages || []);

  return (
    <div className="container">
      <h2 className="heading">Specialized Holiday Travel Tour Packages</h2>
      <p className="subheading">Vacations to make your experience enjoyable in India!</p>

      {/* Categories Tabs */}
      <div className="tabContainer">
        {categories.slice(0, 7).map((category, index) => (
          <button
            key={index}
            className={`tab ${selectedCategory === category.slug ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.slug)} // Update selectedCategory on click
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Packages Display */}
      <div className="packagesContainer">
        {result === undefined || result.length === 0 ? (
          <p>No packages found for this category.</p>
        ) : (
          result.map((pkg, index) => (
            <div key={index} className="packageCard">
              <img src={pkg.package_image} alt={pkg.package_title} className="packageImage" />
              <h3 className="packageTitle">{pkg.package_title}</h3>
              <p className="packageRoute">{pkg.package_route}</p>
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
  );
};

export default TabTourPackages;
