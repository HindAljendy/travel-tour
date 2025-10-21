import './Reviews.css'
import AboutTitle from '../AboutTitle/AboutTitle'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCards } from 'swiper/modules';

import CardReview from '../../CardReview/CardReview';
import person1 from './../../../assets/tst-1.webp'
import person2 from './../../../assets/tst-2.webp'
import person3 from './../../../assets/tst-3.webp'
import person4 from './../../../assets/tst-4.webp'

const Reviews = () => {


    return (
        <div className='section reviews'>
            <div className="container">
                <div className="content-reviews">
                    <div className='part-one'>
                        <AboutTitle title="What People Say About Us" />

                        <p className='text'>We don't just work with concrete and steel , we are Approchable with even our
                            highest concrete and steel ,we work with people .
                        </p>
                        <button>Find Out More</button>
                    </div>

                    <div className='part-two'>
                        <div className='slider_AutoPlay_GrapCursor'>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <CardReview image={person1} name="Ishin Korma" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardReview image={person2} name="Sara Ali" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardReview image={person3} name="Yousef Mana" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CardReview image={person4} name="Ali Ali" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
