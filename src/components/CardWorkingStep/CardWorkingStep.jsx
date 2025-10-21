import React from 'react'
import './CardWorkingStep.css'

const CardWorkingStep = ({imgStep , className , title }) => {
    return (
        <div className='Card-WorkingStep'>
            <div className={`image-card ${className}`}>
                <img src={imgStep} alt="imgStep" />
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <p>Loborits luctus neque duis lacinia volutp suspendisse pulvinar pen atibus malesu ada placerat...</p>
            </div>

        </div>
    )
}

export default CardWorkingStep