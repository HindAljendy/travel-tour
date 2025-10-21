import React from 'react'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import TopDestinations from '../../components/sections/TopDestinations/TopDestinations'
import Navbar from '../../components/Navbar/Navbar'
import TravelExperience from '../../components/sections/TravelExperience/TravelExperience'
import TravelPlace from '../../components/sections/TravelPlace/TravelPlace'
import BuisnessBanner from '../../components/sections/BuisnessBanner/BuisnessBanner'
import Reviews from '../../components/sections/Reviews/Reviews'
import HolidayPackage from '../../components/sections/HolidayPackage/HolidayPackage'
import Gallery from '../../components/sections/Gallery/Gallery'
import { motion } from 'framer-motion'


const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HeroPage title="About" />
      <TopDestinations />
      <TravelExperience />
      <TravelPlace />
      <BuisnessBanner />
      <Reviews />
      <HolidayPackage />
      <Gallery />

    </motion.div>
  )
}

export default AboutUs