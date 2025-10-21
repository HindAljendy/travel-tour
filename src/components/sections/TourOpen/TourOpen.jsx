import React, { useState } from 'react'
import './TourOpen.css'
import TourInfoAll from '../../TourInfoAll/TourInfoAll';
import BookingModal from '../../BookingModal/BookingModal';

const TourOpen = ({ item }) => {

  //! Modal Booking
  const [showModal, setShowModal] = useState(false); // boolean
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [mainImage, setMainImage] = useState(item.images[0]);

  //! contact form by using web3form service  without backend ,
  //! with Verification :

  const [result, setResult] = useState("") // string
  const [errors, setErrors] = useState({}); // To store verification errors : object

  const validateForm = (formData) => {
    const newErrors = {};

    // Check each field as needed:
    if (!formData.get("client_name")) {
      newErrors.client_name = "Please enter your name";
    }
    if (!formData.get("client_email")) {
      newErrors.client_email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("client_email"))) {
      newErrors.client_email = "Please enter a valid email";
    }
    if (!formData.get("country")) {
      newErrors.country = "Please select a country";
    }
    if (!formData.get("client_phone")) {
      newErrors.client_phone = "Please enter your contact number";
    }
    if (!formData.get("number_adults")) {
      newErrors.number_adults = "Please enter number of adults";
    }
    if (!formData.get("number_childs")) {
      newErrors.number_childs = "Please enter number of children";
    }
    if (!formData.get("enquiry_subject")) {
      newErrors.enquiry_subject = "Please enter the subject";
    }
    if (!formData.get("message")) {
      newErrors.message = "Please enter your message";
    }

    return newErrors;
  };

  const onSubmit_func = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "2785a43d-f2b4-413a-8a5e-d8a2a38b0ac8");

    // first => Data validation :
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {

      //! If there are errors, display them to the user.
      setErrors(validationErrors);
      console.log('validationErrors ', validationErrors);
      setResult("");
      return; // Stop sending
    }

    setErrors({});
    setResult("Sending ...");

    // sending:
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      console.log("Form Submitted Successfully", data.data);
      setResult("Form Submitted Successfully");

      /* Reset the data inputs */
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    // Hide result after 5 seconds :
    setTimeout(() => {
      setResult("");
    }, 5000);
  }

  return (
    <div className='section tour-open'>
      <div className="container">
        <div className="content-TourOpen">

          <div className="part-top">
            <div className="tour-images">
              {
                item.images.map((img, index) => (
                  <div
                    className='images-small'
                    key={index}
                    onClick={() => setMainImage(img)}
                  >
                    <img src={img} alt="img" />
                  </div>
                ))
              }
            </div>
            <div className='main-image'>
              <img src={mainImage} alt="main_image" />
            </div>
          </div>

          <div className="part-name">
            <h2>{item.name}</h2>
            
            <button onClick={handleOpenModal}>Book Now</button>
            {
              showModal && (
                <BookingModal handleCloseModal={handleCloseModal} item={item} />
              )
            }
          </div>

          <div className="part-moreInfo">
            <TourInfoAll item={item} />
          </div>

          <div className="overview-part">
            <h3 >Overview</h3>
            <p>{item.overview}</p>
          </div>

          {/* Form   من اجل الاستفسار*/}
          <div className='Form-Tour'>
            <h4>You can send your enquiry via the form below</h4>
            <h5> <strong>Trip name :</strong> {item.name} </h5>

            <form onSubmit={onSubmit_func}>
              <div className='field'>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="client_name" id="name" placeholder='Enter Your Name' />
                {/* show error: */}
                {errors.client_name && <p className="error">{errors.client_name}</p>}

              </div>

              <div className='field'>
                <label htmlFor="email">Your Email</label>
                <input type="text" name="client_email" id="email" placeholder='Enter Your Email' />

                {errors.client_email && <p className="error">{errors.client_email}</p>}
              </div>

              <div className='inputs-form'>
                <div className="field">
                  <label htmlFor="country">Country</label>
                  <select name="country" id="country">
                    <option selected disabled>Choose a country</option>
                    <option value="UsA">USA</option>
                    <option value="UK">UK</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                  </select>

                  {errors.country && <p className="error">{errors.country}</p>}

                </div>

                <div className="field">
                  <label htmlFor="phone">Contact Number</label>
                  <input type="tel" name="client_phone" id="phone" placeholder='Enter Your Contact Number' />

                  {errors.client_phone && <p className="error">{errors.client_phone}</p>}
                </div>
              </div>

              <div className='inputs-form'>
                <div className="field">
                  <label htmlFor="number_adults">No. of Adults</label>
                  <input type="number" name="number_adults" id="number_adults" placeholder='Enter Number Of Adults' />

                  {errors.number_adults && <p className="error">{errors.number_adults}</p>}

                </div>

                <div className="field">
                  <label htmlFor="number_childs">No. of Children</label>
                  <input type="number" name="number_childs" id="number_childs" placeholder='Enter Number Of Childen' />

                  {errors.number_childs && <p className="error">{errors.number_childs}</p>}

                </div>
              </div>

              <div className='field'>
                <label htmlFor="enquiry_subject">Enquiry Subject</label>
                <input type="text" name="enquiry_subject" id="enquiry_subject" placeholder='Enquiry Subject' />

                {errors.enquiry_subject && <p className="error">{errors.enquiry_subject}</p>}

              </div>

              <div className='field'>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder='Enter Your Message' ></textarea>

                {errors.message && <p className="error">{errors.message}</p>}

              </div>

              <div className='button-submit'>
                <input type="submit" value="Send Email" />
              </div>

              <p className='result'>{result}</p>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default TourOpen