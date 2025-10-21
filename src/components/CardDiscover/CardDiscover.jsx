import React from 'react'
import './CardDiscover.css'
import discoverImg from './../../assets/Discover-image-1.webp'
import { FaLocationDot } from 'react-icons/fa6'

const CardDiscover = ({discoverImg ,location}) => {
    return (
        <div className='Card-Discover'>
            <img src={discoverImg} alt="discoverImg" />
            <div className='card-description'>
                <span><FaLocationDot />{location}</span>
                <h2>Beautiful tropical beach sea with umbrella chair around swimming pool.</h2>
            </div>
        </div>
    )
}

export default CardDiscover