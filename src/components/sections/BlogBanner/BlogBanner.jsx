import React from 'react'
import './BlogBanner.css'
import Button from '../../Button/Button'
import { motion } from "framer-motion";

const BlogBanner = () => {

    //! Animation
    const sectionTitleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1},
    };

    return (
        <div className='section blog-banner'>
            <motion.div
                className='section-title'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                variants={sectionTitleVariants}
            >
                <h2>FrostQuest Is A World Leading Online Tour Booking Platform</h2>
            </motion.div>

            <div className="button-banner">
                <Button />
            </div>

        </div>
    )
}

export default BlogBanner