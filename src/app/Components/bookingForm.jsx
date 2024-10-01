import { EXPORT_ALL_APIS } from '@/utils/api/apis';
import React, { useState } from 'react'

function BookingForm({setIsOpen}) {
    let api = EXPORT_ALL_APIS()

    let [resp, setResp] = useState({
        yourname: '',
        youremail: '',
        yourdestination:'',
        phonenumber: '',
        yourmessage: '',
    });

    let [errors, setErrors] = useState({});

    let getInputHandel = (e) => {
        let { name, value } = e.target;
        setResp({ ...resp, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    let validateEmail = (email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    let validatePhoneNumber = (phoneNumber) => {

        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber);
    };

    let handelFormError = () => {
        let { yourname, youremail,yourdestination, phonenumber, yourmessage } = resp;
        let valid = true;
        let errorFields = {};

        if (!yourname) {
            valid = false;
            errorFields.yourname = 'Name is required';
        }

        if (!youremail) {
            valid = false;
            errorFields.youremail = 'Email is required';
        } else if (!validateEmail(youremail)) {
            valid = false;
            errorFields.youremail = 'please provide valif email';
        }

        if (!phonenumber) {
            valid = false;
            errorFields.phonenumber = 'Phone number is required';
        } else if (!validatePhoneNumber(phonenumber)) {
            valid = false;
            errorFields.phonenumber = 'Phone number must be exactly 10 digits';
        }

        if(!yourdestination){
            valid = false;
            errorFields.yourdestination = 'yourdestination is required';
        }

        if (!yourmessage) {
            valid = false;
            errorFields.yourmessage = 'Message is required';
        }

        setErrors(errorFields);
        return valid;
    };

    let handleSubmit = async () => {

        if (handelFormError()) {
            let formData = new FormData()
            formData.append('_wpcf7_unit_tag', 82)
            formData.append('yourname', resp.yourname)
            formData.append('youremail', resp.youremail)
            formData.append('yourdestination', resp.yourdestination)
            formData.append('phonenumber', resp.phonenumber)
            formData.append('yourmessage', resp.yourmessage)
        
        let data = await api.submitBookingQuery(formData)
        if (data) {
            console.log(data)
           setResp({
            yourname: '',
            youremail: '',
            yourdestination:'',
            phonenumber: '',
            yourmessage: '',
        })
        setTimeout(() => {
            setIsOpen(false)
        }, 700);
        }
    }
    };
    return (
        <>
            <div className="booking-form-outer">
                <button onClick={()=>setIsOpen(false)}>X</button>
                <div className="left">
                    <h2>Send Us a Query</h2>
                    <div className="form-container">

                        <input
                            type="text"
                            name="yourname"
                            placeholder="Enter Your Name"
                            className="input-field"
                            value={resp.yourname}
                            onChange={getInputHandel}
                        />
                        {errors.yourname && <p className="error">{errors.yourname}</p>}

                        <input
                            type="email"
                            name="youremail"
                            placeholder="Enter Your Email"
                            className="input-field"
                            value={resp.youremail}
                            onChange={getInputHandel}
                        />
                        {errors.youremail && <p className="error">{errors.youremail}</p>}

                        <input
                            type="test"
                            name="yourdestination"
                            placeholder="Enter Your Destination"
                            className="input-field"
                            value={resp.yourdestination}
                            onChange={getInputHandel}
                        />
                        {errors.yourdestination && <p className="error">{errors.yourdestination}</p>}

                        <input
                            type="tel"
                            name="phonenumber"
                            placeholder="Phone Number"
                            className="input-field"
                            value={resp.phonenumber}
                            onChange={getInputHandel}
                        />
                        {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}

                        <textarea
                            name="yourmessage"
                            placeholder="Enter Your Message"
                            className="input-field"
                            value={resp.yourmessage}
                            onChange={getInputHandel}
                        />
                        {errors.yourmessage && <p className="error">{errors.yourmessage}</p>}

                        <button type="submit" className="btn" onClick={handleSubmit}>
                            Send Message
                        </button>

                    </div>
                </div>
                <div className="right">
                    <img src="/images/contact-girl.png" alt="Contact Illustration" />
                </div>
            </div>
        </>
    );
}

export default BookingForm;
