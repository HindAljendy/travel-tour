import React from 'react'
import './CardTour.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdPlace } from 'react-icons/md'
import { BsClockHistory } from 'react-icons/bs'

const CardTour = ({ imageTour, location, name, days , tourData }) => {

    const navigate= useNavigate();

    const handleViewDetails = () => {
        navigate('/tour-details' , {state : tourData})
    }
    return (
        <div className='card-tour'>
            <div className="image-card-tour">
                <img src={imageTour} alt="imageTour" />
            </div>
            <span> <MdPlace className='icon' /> {location}</span>
            <div className="content-card-tour">
                <Link><h2>{name}</h2></Link>
                <div className='box'>
                    <p><BsClockHistory className='icon' />{days}</p>
                    <button onClick={handleViewDetails}>view Details</button>
                </div>
            </div>
        </div>
    )
}

export default CardTour