import React from 'react'
import './TravelExperience.css'
import img1 from './../../../assets/travel-icon1.webp'
import img2 from './../../../assets/travel-icon2.webp'
import AboutTitle from '../AboutTitle/AboutTitle'
import Travel from '../../Travel/Travel'
import SmallImagesPersons from '../../SmallImagesPersons/SmallImagesPersons'
import imageTravel1 from './../../../assets/experience-image1.webp'
import imageTravel2 from './../../../assets/experience-image2.webp'
import imageTravel3 from './../../../assets/experience-image3.webp'

const TravelExperience = () => {
    return (
        <div className='section travel-experience'>
            <div className="container">
                <div className="content-travel">
                    <div className="part-one">
                        <AboutTitle title="Get the Best Travel Experience" />
                        <Travel image={img1} title_info="Best Of Hotel" />
                        <Travel image={img2} title_info="Friendly Price" />

                        <div className='find-more'>
                            <button>Find Out More</button>
                            <div className='small-circles'>
                                <SmallImagesPersons />
                                <div className='number-increase'>50+</div>
                            </div>
                        </div>
                    </div>

                    <div className="part-two">
                        <div className='top'>
                            <div className='image-travel'>
                                <img src={imageTravel1} alt="imageTravel1" />
                                <div className='city'>America</div>
                            </div>
                            <div className='image-travel'>
                                <img src={imageTravel2} alt="imageTravel2" />
                                <div className='city'>Asia</div>
                            </div>

                        </div>

                        <div className='bottom'>
                            <div className='image-travel'>
                                <img src={imageTravel3} alt="imageTravel3" />
                                <div className='city'>Africa</div>
                            </div>
                            <div className='image-travel'>
                                <img src={imageTravel3} alt="imageTravel3" />
                                <div className='city'>Europe</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TravelExperience