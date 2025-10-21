import React from 'react'
import './CardHoliday.css'
import { FiCheck } from 'react-icons/fi'

const CardHoliday = ({price , tour_name , ImgTravel_big , ImgTravel_small}) => {
    return (
        <div className='card-holiday'>
            <h2><sup>$</sup>{price}<small>/month</small></h2>
            <div className='all-images'>
                <img src={ImgTravel_big} alt="price1 " />
                <img src={ImgTravel_small} alt="price2 " />
            </div>
            <h4>{tour_name}</h4>
            <p>We don't just work with concrete , we are Approchable </p>
            <ul>
                <li><FiCheck className='icon' />   Generation Technology</li>
                <li><FiCheck className='icon' />   Generation Technology</li>
                <li><FiCheck className='icon' />   Audio Performance</li>
                <li><FiCheck className='icon' />   Generation Technology</li>
            </ul>
            <button>Get Started</button>
        </div>
    )
}

export default CardHoliday