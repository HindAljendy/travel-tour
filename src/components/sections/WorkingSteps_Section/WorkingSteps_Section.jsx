import React from 'react'
import './WorkingSteps_Section.css'
import Feature_1 from './../../../assets/Feature-image-1.webp'
import Feature_2 from './../../../assets/Feature-image-2.webp'
import SectionTitle from '../../SectionTitle/SectionTitle'
import CardWorkingStep from '../../CardWorkingStep/CardWorkingStep'
import ImgStep1 from './../../../assets/steps-1.svg'
import ImgStep2 from './../../../assets/steps-2.svg'
import ImgStep3 from './../../../assets/steps-3.svg'
import { motion } from "framer-motion";

const WorkingSteps_Section = () => {

    //! Animation
    const sectionTitleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const parentVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.4
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };
    return (
        <div className='section WorkingSteps'>

            <img src={Feature_1} alt="Feature_1" className='image-girl' />
            <img src={Feature_2} alt="Feature_2" className='image-hand' />

            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    variants={sectionTitleVariants}
                >
                    <SectionTitle
                        small_title="Working Steps"
                        title="Book Your Next Trip in 3 Steps"
                    />
                </motion.div>

                <div className="content">
                    <motion.div
                        className="All-cards"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={parentVariants}
                    >
                        <motion.div
                            variants={childVariants}
                        >
                            <CardWorkingStep
                                imgStep={ImgStep1}
                                title="Choose Destination"
                            />
                        </motion.div>
                        <motion.div
                            variants={childVariants}
                        >
                            <CardWorkingStep
                                imgStep={ImgStep2}
                                title="Make Payment"
                                className="bg-image-card2"
                            />
                        </motion.div>
                        <motion.div
                            variants={childVariants}
                        >
                            <CardWorkingStep
                                imgStep={ImgStep3}
                                title="Reach Airport on date"
                                className="bg-image-card3"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default WorkingSteps_Section