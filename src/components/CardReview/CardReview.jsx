import React from 'react'
import './CardReview.css'
import { FaStar } from 'react-icons/fa6'

const CardReview = ({image , name}) => {
    return (
        <div className='card-review'>
            <img src={image} alt="person" />
            <p>We don't just work with concrete and steel , we are Approchable with even our
                highest concrete and steel ,we work with people .
            </p>
            <div className='more-info'>
                <div className='person'>
                    <h3>{name}</h3>
                    <span>Fementum Odio Co.</span>
                </div>
                <div className='stars'>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                    <FaStar className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default CardReview