import React from 'react'
import './Destination_section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Destninations from '../../../data/Destinations';
import CardDestination from '../../CardDestination/CardDestination';
import { Link } from 'react-router-dom';

const Destination_section = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,

        }
      }
    ]
  };
  return (
    <div className='section destination'>
      <SectionTitle />

      <div className="slider_AutoScroll">
        <Slider {...settings}>

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

        <p className='opinion'>Want To See Our Top Destinations. <Link>click hee to view more.</Link></p>

      </div>


    </div>
  )
}

export default Destination_section