import React from 'react'
import './CardTopDestination.css'
import { BiLink, BiPlay, BiSolidSend } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const CardTopDestination = ({ image, place, price, day, id }) => {
    return (
        <div className='card-top-destination'>
            <div className="Image">
                <img src={image} alt="img" />

                <div className="icons">
                    <div className='circle'>
                        <Link to={`/destination-details/${id}`} > 
                            <BiPlay className='icon-play' />
                        </Link>
                    </div>

                    <div className='circle'>
                        <Link to={`/destination-details/${id}`} >   
                            <BiLink className='icon-link' />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="info">
                <Link to={`/destination-details/${id}`} ><span className='name-place'>{place}</span></Link>

                <span>{price}</span>
            </div>
            <div className="days">
                <BiSolidSend className='icon' />
                <span>{day}</span>
            </div>
        </div>
    )
}

export default CardTopDestination