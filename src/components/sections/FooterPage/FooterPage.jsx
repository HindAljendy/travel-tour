import React from 'react'
import './FooterPage.css'
import image1 from './../../../assets/ins1.webp'
import image2 from './../../../assets/ins2.webp'
import image3 from './../../../assets/ins3.webp'
import image4 from './../../../assets/ins4.webp'
import image5 from './../../../assets/ins5.webp'
import { FiCheck } from 'react-icons/fi'
import { FaFacebookF, FaPhoneFlip, FaTwitter, FaYoutube } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

const FooterPage = () => {
    return (
        <div className='footer-page'>
            <div className="container">
                <div className="begin-footer-page">
                    <h2>Quick Links:</h2>
                    <div className='links'>
                        <ul>
                            <li><FiCheck className='icon' />Branding</li>
                            <li><FiCheck className='icon' />Recent Work</li>
                            <li><FiCheck className='icon' />Our History</li>
                        </ul>

                        <ul>
                            <li><FiCheck className='icon' />Product Gallery</li>
                            <li><FiCheck className='icon' />Web & Interactive</li>
                            <li><FiCheck className='icon' />Help & Support</li>
                        </ul>

                        <ul>
                            <li><FiCheck className='icon' />About us</li>
                            <li><FiCheck className='icon' />Branded Merchandise</li>
                            <li><FiCheck className='icon' />Our Awards</li>
                        </ul>

                        <ul>
                            <li><FaPhoneFlip className='blue' />666 888 0000</li>
                            <li><IoMdMail className='blue' />needhelp@gmail.com</li>
                            <li><FaFacebookF className='blue' /><FaTwitter className='blue' /><FaYoutube className='blue' /></li>
                        </ul>

                    </div>
                </div>


                <div className="images-footer-page">
                    <div className='image'>
                        <img src={image1} alt="image1" />
                    </div>
                    <div className='image'>
                        <img src={image2} alt="image2" />
                    </div>
                    <div className='image'>
                        <img src={image3} alt="image3" />
                    </div>
                    <div className='image'>
                        <img src={image4} alt="image4" />
                    </div>
                    <div className='image'>
                        <img src={image5} alt="image5" />
                    </div>
                </div>

                <div className="copyright">
                    <small>@Hind Jendy , Frontend Developer</small>
                </div>
            </div>

        </div>
    )
}

export default FooterPage