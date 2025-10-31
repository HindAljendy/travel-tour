import React from 'react'
import Footer from '../../Footer/Footer'
import FooterBottom from '../../FooterBottom/FooterBottom'
import { motion } from "framer-motion";

const HomeFooter = () => {

    //! Animation
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            variants={sectionVariants}
        >
            <Footer />
            <FooterBottom />
        </motion.div>
    )
}

export default HomeFooter