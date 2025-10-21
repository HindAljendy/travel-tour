import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Destination_section from '../../components/sections/Destination_section/Destination_section'
import About_section from '../../components/sections/About_section/About_section'
import Discover_Section from '../../components/sections/Discover_Section/Discover_Section'
import WorkingSteps_Section from '../../components/sections/WorkingSteps_Section/WorkingSteps_Section'
import Offer_Section from '../../components/sections/Offer_Section/Offer_Section'
import Testimonials_Section from '../../components/sections/Testimonials_Section/Testimonials_Section'
import BlogBanner from '../../components/sections/BlogBanner/BlogBanner'
import Blog_Section from '../../components/sections/Blog_Section/Blog_Section'
import { motion } from 'framer-motion'
import HomeFooter from '../../components/sections/HomeFooter/HomeFooter'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <Navbar />
      <Hero />
      <Destination_section />
      <About_section />
      <Discover_Section />
      <WorkingSteps_Section />
      <Offer_Section />
      <Testimonials_Section />
      <BlogBanner />
      <Blog_Section />
      <HomeFooter />

    </motion.div>


  )
}

export default Home