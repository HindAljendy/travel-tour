import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import AllToursDestinations from '../../components/sections/AllToursDestinations/AllToursDestinations'
import Gallery from '../../components/sections/Gallery/Gallery'
import { motion } from 'framer-motion'


const Tours = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HeroPage title="Trip Search Result" />
      <AllToursDestinations />
      <Gallery />

    </motion.div>
  )
}

export default Tours