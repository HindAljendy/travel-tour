import React from 'react'
import './About_section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import aboutImg2 from './../../../assets/about-image-2.webp'
import aboutImg1 from './../../../assets/about-image-1.webp'
import aboutE1 from './../../../assets/about-element-1.webp'
import aboutE2 from './../../../assets/about-element-2.webp'
import aboutE3 from './../../../assets/about-element-3.webp'
import check from './../../../assets/about-check.svg'
import { BiPlay } from 'react-icons/bi'
import Button from '../../Button/Button'
import SmallImagesPersons from '../../SmallImagesPersons/SmallImagesPersons'
import { motion } from "framer-motion";


const About_section = () => {

    //! Animation
    const sectionLeftVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };
    const sectionRightVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className='section about'>
            <div className="container">
                <div className='row'>
                    <motion.div
                        className='left'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        variants={sectionLeftVariants}
                    >
                        <SectionTitle
                            small_title="About our Company"
                            title="Experience the World with Our Company"
                            text="Embark  on a transformative journey as our company invites you to experience the world,
                            creating unforgettable memories through exceptional travel  adventures."
                        />

                        <div className="about-top">
                            <div className='part-one'>
                                <div className="image">
                                    <div className='container-icon'>
                                        <BiPlay className='icon' />
                                    </div>

                                    <img src={aboutImg2} alt="aboutImg2" />
                                </div>
                            </div>

                            <div className="part-two">
                                <ul>
                                    <li>Perfect Detailing</li>
                                    <li>Completed Certification</li>
                                    <li>Save your Budget</li>
                                    <li>Free Consultations</li>
                                </ul>
                            </div>
                        </div>


                        <div className="about-bottom">

                            <Button />

                            <SmallImagesPersons />
                            <p>5.2+ Satisfied Clients.</p>
                        </div>

                    </motion.div>


                    <motion.div
                        className='right'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        variants={sectionRightVariants}
                    >
                        <div className="about-image">
                            <img src={aboutImg1} alt="about-image1" className='about-ImgBig' />
                            <img src={aboutE1} alt="" className='about-element1' />
                            <img src={aboutE2} alt="" className='about-element2' />
                            <img src={aboutE3} alt="" className='about-element3' />
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default About_section
