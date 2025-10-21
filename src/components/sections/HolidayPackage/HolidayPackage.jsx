import React from 'react'
import './HolidayPackage.css'
import AboutTitle from '../AboutTitle/AboutTitle'
import CardHoliday from '../../CardHoliday/CardHoliday'
import price1 from './../../../assets/price-1.webp'
import price2 from './../../../assets/price-2.webp'
import price3 from './../../../assets/price-3.webp'
import price4 from './../../../assets/price-4.webp'
import price5 from './../../../assets/price-5.webp'
import price6 from './../../../assets/price-6.webp'
import { Link } from 'react-router-dom'

const HolidayPackage = () => {
    return (
        <div className='section holiday-package'>
            <div className="container">
                <AboutTitle title="Best Holiday Package" />
                <div className="All-cards">
                    <CardHoliday price="99" tour_name="Turkey Tour" ImgTravel_big={price1} ImgTravel_small={price2} />
                    <CardHoliday price="79" tour_name="Full Travel" ImgTravel_big={price3} ImgTravel_small={price4} />
                    <CardHoliday price="49" tour_name="World Tour"  ImgTravel_big={price5} ImgTravel_small={price6} />
                </div>

                <p className='opinion'>Want To See Our Recent News & Updates. <Link>click here to view more.</Link></p>
            </div>

        </div>
    )
}

export default HolidayPackage
