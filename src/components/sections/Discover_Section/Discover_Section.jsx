import React from 'react'
import './Discover_Section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import CardDiscover from '../../CardDiscover/CardDiscover'
import Img1 from './../../../assets/Discover-image-1.webp'
import Img2 from './../../../assets/Discover-image-2.webp'
import Img3 from './../../../assets/Discover-image-3.webp'
import Img4 from './../../../assets/Discover-image-4.webp'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Discover_Section = () => {

    //! Animation
    const sectionTitleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };
    const sectionCardVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className='section discover'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={sectionTitleVariants}
            >
                <SectionTitle
                    small_title="Travel Destinatinations"
                    title="Discover the Touch of Nature"
                    text="Our cLients rave about our  the seamiess experiences that exceeded their expectations ."
                />
            </motion.div>

            <div className="container">
                <div className='content'>
                    <div className="container-cards">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            variants={sectionCardVariants}
                        >
                            <CardDiscover discoverImg={Img1} location="Maldives" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            variants={sectionCardVariants}
                        >
                            <CardDiscover discoverImg={Img2} location="Vietnam" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            variants={sectionCardVariants}
                        >
                            <CardDiscover discoverImg={Img3} location="Dubai" />
                        </motion.div>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            variants={sectionCardVariants}
                        >
                            <CardDiscover discoverImg={Img4} location="Nebal" />
                        </motion.div>
                    </div>
                    <p className='opinion'>Want To See Our Top Destinations. <Link to="/destinations">click here to view more.</Link></p>
                </div>
            </div>
        </div>

    )
}

export default Discover_Section