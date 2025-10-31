import React from 'react'
import './Offer_Section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Button from '../../Button/Button'
import ImgOffer1 from './../../../assets/offer-bg-1.webp'
import ImgOffer2 from './../../../assets/offer-bg-2.webp'
import { motion } from "framer-motion";

const Offer_Section = () => {

    //! Animation
    const sectionVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className='section offer'>
            <motion.img
                className='img-Offer1'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={imageVariants}
                src={ImgOffer1}
                alt="ImgOffer1"
            />
            <motion.img
                className='img-Offer2'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={imageVariants}
                src={ImgOffer2}
                alt="ImgOffer2"
            />

            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionVariants}
                >
                    <SectionTitle
                        small_title="35% OFFER"
                        title="Get Special Offer"
                        text="Embark on an unforgettable journey with our exclusive tour special offer seize the moment and create lasting memories."
                    />
                </motion.div>

                <div className='button'>
                    <Button />
                </div>

                <div className='offer-ratio'>
                    <h1>40</h1>
                    <div>
                        <h3> %</h3>
                        <h3> oFF</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer_Section