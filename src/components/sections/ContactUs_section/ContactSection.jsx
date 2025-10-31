import React from 'react'
import './ContactUs.css'
import ContactInfo from '../../ContactInfo/ContactInfo'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { MdPlace } from 'react-icons/md'
import SocialContact from '../../SocialContact/SocialContact'

const ContactSection = () => {

  /* map source */
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127482.68825183502!2d101.60441517379351!3d3.13850264711586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1761672024906!5m2!1sen!2smy";

  //! contact form by using web3form service  without backend ,

  const onSubmit_func = async (event) => {

    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "2785a43d-f2b4-413a-8a5e-d8a2a38b0ac8");

    // sending:
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      console.log("Form Submitted Successfully", data.data);

      /* Reset the data inputs */
      event.target.reset();
    } else {
      console.log("Error", data);
    }

  }

  return (
    <div className='section contact-us'>
      <div className="container">
        <div className="title-contact">
          <h2>Get in touch with our lovely Team</h2>
        </div>
        <div className="content-contact">
          <div className="left">
            <div className='info'>

              <ContactInfo
                icon={<MdPlace />}
                title="Office Address"
                text1="Agency Network 20"
                text2="Eastbourne Terrace, London w2 6LG"
              />
              <ContactInfo
                icon={<FaPhone />}
                title="Phone Number"
                text1="(488) 8542-389-5470"
                text2="(488) 7485-319-1489"
              />
              <ContactInfo
                icon={<FaEnvelope />}
                title="Mail Address"
                text1="hind@gmail.com"
                text2="supportHind@gmail.com"
              />

            </div>
          </div>

          <div className="right">
            <form onSubmit={onSubmit_func}>
              <input type="text" name="name" placeholder='Full name' />
              <input type="email" name="email" placeholder='Email Address' />
              <input type="tel" name="phone" placeholder='Phone number' />
              <input type="text" name="subject" placeholder='Subject' />
              <textarea name="message" placeholder='Type your message'></textarea>

              <button type="submit" className='btn-send'>Send Message</button>
            </form>
          </div>
        </div>
        
        <SocialContact />

      </div>
        <div className='map'>
          <iframe
            src={iframeSrc}

            width="100%"
            height="500"
            style={{ border: "0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>

        </div>

    </div>
  )
}

export default ContactSection