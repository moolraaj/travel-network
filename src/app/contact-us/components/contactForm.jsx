const ContactForm = () => {
  return (
    <div>
      <div className="top-three">
        <div className="">
        <img src="/Group 1000003622.png"/>
            <h2>Address</h2>
            <p>Corporate Office: 401, Time Shoppers, Opp. Deepkamal Mall, Sarthana Jakatnaka, </p>
        </div>
        <div className="">
        <img src="/Group 1000003653.png"/>
            <h2>Contact</h2>
            <p>Mobile : +918627814386</p>
            <p>Email   :  travelnetwork@gmail.com</p>
        </div>
        <div className="">
            <h2>85+ Expert Happy Clients</h2>
            <img src="/Group 1000003640.png"/>
        </div>
      </div>
      <div className="contact-form-section">
        <div className="left">
          <h2>Send Us Message</h2>
          <div className="form-container">
            <form>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input-field"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input-field"
                required
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                className="input-field"
                required
              />
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

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
