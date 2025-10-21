import React, { useEffect, useRef, useState } from 'react'
import gallery1 from './../../../assets/gallery-image1.webp'
import gallery2 from './../../../assets/gallery-image2.webp'
import gallery3 from './../../../assets/gallery-image3.webp'
import gallery4 from './../../../assets/gallery-image4.webp'
import gallery5 from './../../../assets/gallery-image5.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'

const Gallery = () => {

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
        slidesToShow:  windowWidth < 600 ? 2 : windowWidth < 1024 ? 3 : 4,
        slidesToScroll: 1,
        speed: 600,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return (
        <div className='section gallery'>
            <div className='gallery-images'>
                <Slider {...settings}  ref={sliderRef} >
                    <div className='container-image'>
                        <img src={gallery1} alt="gallery1" />
                    </div>
                    <div className='container-image'>
                        <img src={gallery2} alt="gallery2" />
                    </div>
                    <div className='container-image'>
                        <img src={gallery3} alt="gallery3" />
                    </div>
                    <div className='container-image'>
                        <img src={gallery4} alt="gallery4" />
                    </div>
                    <div className='container-image'>
                        <img src={gallery5} alt="gallery5" />
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default Gallery