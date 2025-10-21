import React from 'react'
import './AboutTitle.css'
import star from './../../../assets/star.webp'

const AboutTitle = ({ title }) => {
    return (
        <div className='about-title'>
            <h5> <img src={star} alt="star" />Get To Know Us</h5>
            <h2>{title}</h2>
        </div>
    )
}

export default AboutTitle