import ContactUs from "./contactUs";

const ContactForm = ({result}) => {
  console.log(result)
  return (
    <div>
      <div className="top-three">
        <div className="">
        <img src="/Group 1000003622.png"/>
            <h2>Address</h2>
            <p>{result?.address}</p>
        </div>
        <div className="">
        <img src="/Group 1000003653.png"/>
            <h2>Contact</h2>
            {result?.contact.map((e,index)=>{
              return <ul key={index}>
                <li><a href={`tel:+91${e?.phone_number}`}>{e?.phone_number}</a></li>
              </ul>
            })}
            <p>Mobile : +918627814386</p>
            <p>{result?.email_address}</p>
        </div>
        <div className="">
            <h2>85+ Expert Happy Clients</h2>
            <img src="/Group 1000003640.png"/>
        </div>
      </div>
     
     <ContactUs/>

      <div className="right">
        <img src="/girl.png" alt="Contact Illustration" />
      </div>

      {/* Map Section */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450943!2d144.9537353155043!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5778e2dff6c1e0!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1603260191729!5m2!1sen!2sau"
          width="100%"
          height="425"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
