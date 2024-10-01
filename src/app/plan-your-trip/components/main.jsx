'use client';
import TopBanner from '@/app/Components/topBanner';
import { AllPackages } from '@/context/contextProviders';
import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import Link from 'next/link';
import { useContext, useState } from 'react';

const PlanATrip = () => {

  let { planPage, destinations } = useContext(AllPackages)
  let result = planPage?.map((e) => e?.acf)



  let api = EXPORT_ALL_APIS()

  const [formData, setFormData] = useState({
    type_of_travels: '',
    conveyance_of_travel: '',
    date_from: '',
    date_to: '',
    adults: '',
    childs: '',
    yourname: '',
    youremail: '',
    youraddress: '',
    yourcity: '',
    yourstate: '',
    yournumber: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.yourname) newErrors.yourname = 'Name is required';
    if (!formData.youremail) newErrors.youremail = 'Email is required';
    if (!formData.yourcity) newErrors.yourcity = 'City is required';
    if (!formData.yourstate) newErrors.yourstate = 'State is required';
    if (!formData.yournumber) newErrors.yournumber = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {


    if (!validateForm()) {
      return;
    }

    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    formDataToSubmit.append('_wpcf7_unit_tag', '273');

    const result = await api.submitPlanATripQuery(formDataToSubmit);


    if (result) {
      setFormData({
        type_of_travels: '',
        conveyance_of_travel: '',
        date_from: '',
        date_to: '',
        adults: '',
        childs: '',
        yourname: '',
        youremail: '',
        youraddress: '',
        yourcity: '',
        yourstate: '',
        yournumber: '',
      });
      setErrors({});
    }
  };

  console.log(destinations)

  return (

    <>
      <TopBanner result={result[0]} />

      <div className="plan_outer">
        <div className="plan_inner">
          <div className="plan_wrapper">

            <div className="form_section">

              <div className="get_in_touch">
                <h2>Get In Touch</h2>
                <p>Drop us an email and we’ll get back to you within 48hrs…</p>

                <div className="plan_trip">

                  <label>
                    Types Of Travel
                    <select name="type_of_travels" value={formData.type_of_travels} onChange={handleChange}>
                      <option value="">Choose your options</option>
                      <option value="Business">Business</option>
                      <option value="Honeymoon">Honeymoon</option>
                      <option value="Family Tour">Family Tour</option>
                      <option value="Adventure Tour">Adventure Tour</option>
                      <option value="Group Tour">Group Tour</option>
                      <option value="Sightseeing">Sightseeing</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="plan_trip">

                  <label>
                    Conveyance Of Travel
                    <select name="conveyance_of_travel" value={formData.conveyance_of_travel} onChange={handleChange}>
                      <option value="">Choose your options</option>
                      <option value="By Taxi">By Taxi</option>
                      <option value="By Bus">By Bus</option>
                      <option value="By Volvo Bus">By Volvo Bus</option>
                      <option value="By Train">By Train</option>
                      <option value="By Air">By Air</option>
                    </select>
                  </label>
                </div>

                <div className="plan_trip">
                  <label>
                    Date From
                    <input type="date" name="date_from" value={formData.date_from} onChange={handleChange} />
                  </label>

                </div>

                <div className="plan_trip">
                  <label>
                    Date To
                    <input type="date" name="date_to" value={formData.date_to} onChange={handleChange} />
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    Adults
                    <input type="number" name="adults" value={formData.adults} onChange={handleChange} />
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    Children
                    <input type="number" name="childs" value={formData.childs} onChange={handleChange} />
                  </label>
                </div>
              </div>
              <div className="personalinofs">
                <h2>Your Personal Information</h2>
                <div className="plan_trip">

                  <label>
                    Your Name
                    <input type="text" name="yourname" value={formData.yourname} onChange={handleChange} />
                    {errors.yourname && <span className='error'>{errors.yourname}</span>}
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    Your Email
                    <input type="email" name="youremail" value={formData.youremail} onChange={handleChange} />
                    {errors.youremail && <span className='error'>{errors.youremail}</span>}
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    Your Address
                    <textarea name="youraddress" value={formData.youraddress} onChange={handleChange} />
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    City
                    <input type="text" name="yourcity" value={formData.yourcity} onChange={handleChange} />
                    {errors.yourcity && <span className='error'>{errors.yourcity}</span>}
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    State
                    <input type="text" name="yourstate" value={formData.yourstate} onChange={handleChange} />
                    {errors.yourstate && <span className='error'>{errors.yourstate}</span>}
                  </label>
                </div>
                <div className="plan_trip">
                  <label>
                    Phone Number
                    <input type="tel" name="yournumber" value={formData.yournumber} onChange={handleChange} />
                    {errors.yournumber && <span className='error'>{errors.yournumber}</span>}
                  </label>
                </div>

              </div>
            </div>

            <div className="destination_section">

              <h2>popular destinations</h2>

              {destinations.slice(0, 4).map((destination, index) => (
                <div className="destination_wrapper" key={index}>
                  <Link href={`/destinations/${destination?.slug}`}>
                    <img src={destination?.destination_image || 'no image found'} alt={destination.alt} />
                    <h3>{destination.name}</h3>
                  </Link>
                </div>
              ))}

            </div>

            <button onClick={handleSubmit}>Submit</button>
          </div>


        </div>
      </div>
    </>




  );
};



export default PlanATrip;
