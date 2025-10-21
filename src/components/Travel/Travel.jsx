import React from 'react'
import './Travel.css'

const Travel = ({image , title_info}) => {
  return (
    <div className='travel-info'>
      <img src={image} alt="image" />
      <div className='info'>
        <h4>{title_info}</h4>
        <p>We don't just work with concrete and steel . we are Approchable with even our highest.</p>
      </div>
    </div>
  )
}

export default Travel