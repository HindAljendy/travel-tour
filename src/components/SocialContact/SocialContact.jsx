import React from 'react'
import './SocialContact.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'

const SocialContact = () => {
    return (
        <div className='SocialContact'>
            <div className="social-icon">
                <FaFacebookF />
            </div>
            <div className="social-icon">
                <FaInstagram />
            </div>
            <div className="social-icon">
                <FaLinkedinIn />
            </div>
            <div className="social-icon">
                <FaPinterestP />
            </div>
        </div>
    )
}

export default SocialContact