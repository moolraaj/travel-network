




const TourDetails = ({ allPackages }) => {

  return (
    <>
    <div className="container tour_packages_outer">
      <div className="tour_packages_inner">
        <div className="tour_packages_wrapper">
        <div className="packages-grid">
        {allPackages?.map((packageGroup, groupIndex) => {
          const packagesArray = packageGroup?.acf?.all_packages;
          if (Array.isArray(packagesArray)) {
            return packagesArray.map((packageItem, index) => (
              <div className="package" key={`${groupIndex}-${index}`}>
                <div className="packages-image">
                  <img src={packageItem.package_image} alt={packageItem.package_title} />
                </div>
                <div className="packages-inner-txt">
                  <h3>{packageItem?.package_title}</h3>
                  <p>{packageItem?.package_description}</p>
                  <div className="days-night">
                    <strong>Days {packageItem.package_days} / Nights {packageItem.packages_nights}</strong>
                    <p><span>From</span> {packageItem.package_price}</p>
                  </div>
                  <button>Book Now</button>
                </div>
              </div>
            ));
          } else {

            return null;
          }
        })}
      </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default TourDetails