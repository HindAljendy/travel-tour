import React from 'react'
import './HeroSlider.css'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

const HeroSlider = ({ image_background }) => {
    return (
        <div className='hero-slider'>
            <img src={image_background} alt="image_background"  />
            <div className="info">
                <h2>THE KINGDOM OF ICE</h2>
                <h1>Green Land</h1>
                <button>LEARN MORE
                    <FaArrowRightFromBracket className="icon"  />
                </button>
            </div>


        </div>
    )
}

export default HeroSlider