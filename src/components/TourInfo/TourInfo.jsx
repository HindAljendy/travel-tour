import React from 'react'
import './TourInfo.css'

const TourInfo = ({icon ,title , text}) => {
    return (
        <div className='tour-info'>
            <div className='circle-icon'>{icon}</div>
            <div className='info'>
                <h5>{title}</h5>
                <strong>{text}</strong>
            </div>
        </div>
    )
}
export default TourInfo