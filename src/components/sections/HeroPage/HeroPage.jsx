import React from 'react'
import './HeroPage.css'
import { Link } from 'react-router-dom'
import { FaGear } from 'react-icons/fa6'

const HeroPage = ({title , }) => {
    return (
        <div className='hero-page'>
            <div className='info'>
                <h2>{title}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><FaGear /> {title} </li>
                </ul>
            </div>
        </div>
    )
}

export default HeroPage