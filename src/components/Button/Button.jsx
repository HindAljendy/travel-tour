import React from 'react'
import './Button.css'
import btnArrow from './../../assets/btn-arrow.svg'
import { useNavigate } from 'react-router-dom';


const Button = () => {
    const navigate = useNavigate();

    const handleViewAbout = () => {
        navigate('/about-us');
    }
    return (
        <div className="btn-box">
            <button onClick={handleViewAbout}>
                Learn More
                <img src={btnArrow} alt="btn-arrow" />
            </button>
        </div>
    )
}

export default Button