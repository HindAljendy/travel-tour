import React from 'react'
import './Testimonials_Section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import testimonial_img from './../../../assets/test-bg.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CardTestimonial from '../../CardTestimonial/CardTestimonial';
import imag1 from './../../../assets/tst-1.webp'
import imag2 from './../../../assets/tst-2.webp'
import imag3 from './../../../assets/tst-3.webp'
import imag4 from './../../../assets/tst-4.webp'

const Testimonials_Section = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow:1,
        slidesToScroll: 1,
        speed: 800,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };

    return (
        <div className='section testimonial'>
            <img src={testimonial_img} alt="testimonial_img" className='Image-right' />
            <img src={testimonial_img} alt="testimonial_img" className='Image-left' />

            <div className="container">
                <SectionTitle
                    small_title="Testimonials"
                    title="What's Our Clients Saying!"
                    text="Our clients rave about our exceptional  seamiess experiences that exceeded their expectations ."
                />
                <div className='Slider-testimonials'>
                    <Slider  {...settings}>
                        <CardTestimonial user={imag1} name="TAHA STEWART"   job="Web Developer at ThemeXviewer" />
                        <CardTestimonial user={imag2} name="SARA ALI"       job="Web Developer at ThemeXviewer" />
                        <CardTestimonial user={imag3} name="AMJAD YOUSEF"   job="Web Developer at ThemeXviewer"/>
                        <CardTestimonial user={imag4} name="KHALED WALED"   job="Web Developer at ThemeXviewer"/>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials_Section