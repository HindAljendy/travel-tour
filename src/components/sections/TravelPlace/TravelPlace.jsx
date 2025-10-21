import React from 'react'
import './TravelPlace.css'
import AboutTitle from '../AboutTitle/AboutTitle'
import SmallImagesPersons from '../../SmallImagesPersons/SmallImagesPersons'
import ImagePlace from './../../../assets/place-image.webp'
import { FiCheck } from 'react-icons/fi'
import iconPlace from './../../../assets/place-element.webp'

const TravelPlace = () => {
    return (
        <div className='section travel-place'>
            <div className="container">
                <div className="content-travel-place">
                    <div className="part-one">
                        <AboutTitle title="Travel place for Your & your Family" />

                        <div className="info">
                            <div className="circles">
                                <SmallImagesPersons />
                                <div className='number-increase'>50+</div>
                            </div>
                            <span>500k + Happy Customer</span>
                        </div>
                    </div>

                    <div className="part-two">
                        <img src={ImagePlace} alt="ImagePlace" />
                        <div className="text">
                            <h4>Waiting for adventures ? Don't miss them</h4>
                            <p>We don't just work with concrete and steel , we are Approchable with even our highest concrete and steel ,we work with people .</p>
                            
                            <div className='overlay-text'>
                                <img src={iconPlace} alt="iconPlace" />
                                <h6>We Have More than 10 years of experience</h6>
                            </div>
                            
                            <ul>
                                <li><FiCheck className='icon'/>   Generation Technology</li>
                                <li><FiCheck className='icon'/>   Generation Technology</li>
                                <li><FiCheck className='icon'/>   Audio Performance</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TravelPlace