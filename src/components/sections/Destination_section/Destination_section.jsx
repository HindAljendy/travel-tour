import React, { useEffect, useRef, useState } from 'react'
import './Destination_section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Destninations from '../../../data/Destinations';
import CardDestination from '../../CardDestination/CardDestination';
import { Link } from 'react-router-dom';

const Destination_section = () => {

  const sliderRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0); // اعادة تهيئة السلايدر
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: windowWidth < 630 ? 1 : windowWidth < 1024 ? 2 : 3,
    slidesToScroll: 1,
    speed: 600,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

  };
  return (
    <div className='section destination'>
      <SectionTitle
        small_title="Travel Destinatinations"
        title="Top Destinations"
        text="Explore our top destinations  voted by more than 100,000+ customers around the world."
      />

      <div className="slider_AutoScroll">
        <Slider {...settings} ref={sliderRef}>

          {
            Destninations.map(destination => {
              return (
                <CardDestination
                  key={destination.id}
                  image={destination.image}
                  name={destination.name}
                  price={destination.price}
                  day={destination.days}
                  text={destination.pere}
                />

              );
            })
          }
        </Slider>

        <p className='opinion'>Want To See Our Top Destinations. <Link to="/destinations">click here to view more.</Link></p>

      </div>


    </div>
  )
}

export default Destination_section