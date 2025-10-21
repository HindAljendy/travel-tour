import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import { useLocation } from 'react-router-dom'
import BlogOpen from '../../components/sections/BlogOpen/BlogOpen'
import BlogHero from '../../components/sections/BlogHero/BlogHero'

const Blog_Details = () => {

    const location = useLocation();
    const item = location.state;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Navbar />
            <BlogHero image={item.main_image} title={item.name}/>
            <BlogOpen item={item} />
        </motion.div>
    )
}

export default Blog_Details