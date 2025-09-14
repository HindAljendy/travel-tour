import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const PrevArrow = ({ OnClick }) => {
    return (
        <div className='prev-arrow' onClick={OnClick}>
            <FaArrowLeft />
        </div>
    )
}

export default PrevArrow