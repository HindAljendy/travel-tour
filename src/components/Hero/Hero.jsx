import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Hero.css'
import Slider from 'react-slick';
import image_hero1 from './../../assets/Hero-slider-1.webp'
import image_hero2 from './../../assets/Hero-slider-2.webp'
import image_hero3 from './../../assets/Hero-slider-3.webp'
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import HeroSlider from '../HeroContentSlider/HeroSlider';

const Hero = () => {

    let sliderRef = useRef(null);

    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };


    var settings = {
        dots: false,
        infinite: true,
        fade: true, /* تلاشي */
        autoplay: true,
        autoplaySpeed: 3000, 
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        nextArrow: <NextArrow OnClick={next} />,
        prevArrow: <PrevArrow OnClick={previous} />,

    };
    return (
        <div className='container-hero'>
            <Slider {...settings} ref={slider => {
                sliderRef = slider;
            }}>
                <HeroSlider image_background={image_hero1} />
                <HeroSlider image_background={image_hero2} />
                <HeroSlider image_background={image_hero3} />
            </Slider>

        </div>
    )
}


export default Hero