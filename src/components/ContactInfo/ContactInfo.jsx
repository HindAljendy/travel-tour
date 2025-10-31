import React from 'react'
import './ContactInfo.css'


const ContactInfo = ({icon , title , text1 , text2}) => {
  return (
    <div className='contact-info'>
        <span className='icon'>{icon}</span>
        <div className='info'>
            <h5>{title}</h5>
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    </div>
  )
}

export default ContactInfo