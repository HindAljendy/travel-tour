import React from 'react'
import './Footer.css'
import Button from '../Button/Button'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import imgfooter from './../../assets/footer.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className='left'>
                    <div className="part-one">
                        <h3>Subscribe for latest update about Travelling</h3>
                        <div className='inputs'>
                            <input type="email" placeholder='Enter Your Email' />
                            <Button />
                        </div>
                    </div>

                    <div className="part-two">
                        <div className='main-info'>
                            <h4>FrostQuest</h4>
                            <p>Go on a journey of adventure with our travel agency . where every detail is curated
                                to perfection ensuring you not only explore the world but also create memories.
                            </p>
                            <div className="Icons">
                                <FaFacebook className='icon' />
                                <FaYoutube className='icon' />
                                <FaInstagramSquare className='icon' />
                                <FaLinkedin className='icon' />

                            </div>
                        </div>

                        <div className='footer-links'>
                            <ul>
                                <li>About</li>
                                <li>Services</li>
                                <li>Login</li>
                                <li>Flights</li>
                            </ul>

                            <ul>
                                <li>Booking</li>
                                <li>FAQ</li>
                                <li>Hotels</li>
                                <li>Teams</li>
                            </ul>

                            <ul>
                                <li>Terms & Use</li>
                                <li>Stomap</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className='right'>
                    <img src={imgfooter} alt="imgfooter" />
                </div>

            </div>

        </div>
    )
}

export default Footer