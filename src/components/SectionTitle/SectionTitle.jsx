import React from 'react'
import imgPlane from './../../assets/plane.svg'
import './SectionTitle.css'

const SectionTitle = () => {
    return (
        <div className='section-title'>
            <div className='main-title'>
                <img src={imgPlane} alt="imgPlane" />
                <span>Travel Destinatinations</span>
                <img src={imgPlane} alt="imgPlane" />
            </div>
            <h2>Top Destinations</h2>
            <p>Explore our top destinations  voted by more 
                than 100,000+ customers around the world.
            </p>

        </div>
    )
}

export default SectionTitle