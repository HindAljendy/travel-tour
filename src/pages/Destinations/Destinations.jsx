import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import Gallery from '../../components/sections/Gallery/Gallery'
import TopDestinations from '../../components/sections/TopDestinations/TopDestinations'
import BuisnessBanner from '../../components/sections/BuisnessBanner/BuisnessBanner'
import Reviews from '../../components/sections/Reviews/Reviews'
import HolidayPackage from '../../components/sections/HolidayPackage/HolidayPackage'
import { motion } from 'framer-motion'


const Destinations = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HeroPage title="Destinations" />
      <TopDestinations />
      <BuisnessBanner />
      <Reviews />
      <HolidayPackage />
      <Gallery />
      
    </motion.div>
  )
}

export default Destinations