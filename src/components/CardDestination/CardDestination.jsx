import React from 'react'
import './CardDestination.css'
import { FaArrowRight } from 'react-icons/fa'
import { BiSolidSend } from 'react-icons/bi'

const CardDestination = ({image , price , name , text , day}) => {
    return (
        <div className='Card-Destination'>
            <div className="main-card">
                <img src={image} alt="image" />
                <span>{price}</span>
            </div>
            <div className="content-card">
                <div className='circle-icon'>
                    <FaArrowRight className='icon' />
                </div>
                <h2>{name}</h2>
                <p>{text}</p>
                <div className="days">
                    <BiSolidSend  className='icon'/>
                    <span>{day}</span>
                </div>
            </div>

        </div>
    )
}

export default CardDestination