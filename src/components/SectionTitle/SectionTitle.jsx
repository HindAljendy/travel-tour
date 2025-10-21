import React from 'react'
import imgPlane from './../../assets/plane.svg'
import './SectionTitle.css'

const SectionTitle = ({small_title , title , text}) => {
    return (
        <div className='section-title'>
            <div className='main-title'>
                <img src={imgPlane} alt="imgPlane" />
                <span>{small_title}</span>
                <img src={imgPlane} alt="imgPlane" />
            </div>
            <h2>{title}</h2>
            <p>{text}</p>

        </div>
    )
}

export default SectionTitle