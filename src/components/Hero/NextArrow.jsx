import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const NextArrow = ({OnClick}) => {
    return (
        <div className='next-arrow' onClick={OnClick}>
            <FaArrowRight />
        </div>
    )
}

export default NextArrow