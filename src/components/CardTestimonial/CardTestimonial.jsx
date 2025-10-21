import React, { useEffect, useRef, useState } from 'react'
import quote from './../../assets/quote-left.png'
import Image from './../../assets/tst-image-1.webp'
import './CardTestimonial.css'
import { FaStar } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const CardTestimonial = ({ name, job, user }) => {

    const { ref: pRef, inView } = useInView({ triggerOnce: false, threshold: 0.1 })
    const [isAnimated, setIsAnimated] = useState(false)

    // استخدم useEffect لمزامنة inView مع isAnimated
    useEffect(() => {
        if (inView && !isAnimated) {
            setIsAnimated(true)
        }
    }, [inView, isAnimated])



    return (
        <div className='card-testimonial'>
            <div className='img-card'>
                <img src={Image} alt="Image_testimonial" />
            </div>
            <div className="card-content">
                <img src={quote} alt="quote" className='quote' />
                <p>" Booking with this travel agency was a game changer their meticulous planning and perssonalized approoch mode our trip not just a vacation but a collection of unforgettable moments from seamless logistics to hidden gems.
                    they turned our travel dreams into a reality , earning our trust and loyolity ."
                </p>
                <div className='starts'>
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                    <FaStar className='icon' />
                </div>
                <div className="user">
                    <img src={user} alt="user" />
                    <div className='user-details'>
                        <h3>{name}</h3>
                        <p ref={pRef} className={ `paragraph ${isAnimated ? 'animate' : ''}`}>{job}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CardTestimonial