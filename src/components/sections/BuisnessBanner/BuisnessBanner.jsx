import React, { useEffect, useRef, useState } from 'react'
import './BuisnessBanner.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import brand1 from './../../../assets/brand-image1.webp'
import brand2 from './../../../assets/brand-image2.webp'
import brand3 from './../../../assets/brand-image3.webp'
import brand4 from './../../../assets/brand-image4.webp'
import brand5 from './../../../assets/brand-image5.webp'

const BuisnessBanner = () => {

    /* responsive slider */
    const sliderRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (sliderRef.current) {
                sliderRef.current.slickGoTo(0);
            };
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: windowWidth < 600 ? 2 : windowWidth < 1024 ? 3 : 4,
        slidesToScroll: 1,
        speed: 600,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div className='section buisness-banner'>
            <div className="container">

                <div className="title">
                    <h2>Trusted By Local Buisnesses </h2>
                </div>

                <div className="slider_AutoScroll">
                    <Slider {...settings} ref={sliderRef}>
                        <div className="brand-image">
                            <img src={brand1} alt="brand1" />
                        </div>
                        <div className="brand-image">
                            <img src={brand2} alt="brand2" />
                        </div>
                        <div className="brand-image">
                            <img src={brand3} alt="brand3" />
                        </div>
                        <div className="brand-image">
                            <img src={brand4} alt="brand4" />
                        </div>
                        <div className="brand-image">
                            <img src={brand5} alt="brand5" />
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default BuisnessBanner