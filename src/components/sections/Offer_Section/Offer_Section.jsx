import React from 'react'
import './Offer_Section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Button from '../../Button/Button'
import ImgOffer1 from './../../../assets/offer-bg-1.webp'
import ImgOffer2 from './../../../assets/offer-bg-2.webp'

const Offer_Section = () => {
    return (
        <div className='section offer'>
            <img src={ImgOffer1} alt="ImgOffer1" className='img-Offer1' />
            <img src={ImgOffer2} alt="ImgOffer2" className='img-Offer2' />
            <div className="container">
                <SectionTitle
                    small_title="35% OFFER"
                    title="Get Special Offer"
                    text="Embark on an unforgettable journey with our exclusive tour special offer seize the moment and create lasting memories."
                />
                <div className='button'>
                    <Button />
                </div>

                <div className='offer-ratio'>
                    <h1>40</h1>
                    <div>
                        <h3> %</h3>
                        <h3> oFF</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer_Section