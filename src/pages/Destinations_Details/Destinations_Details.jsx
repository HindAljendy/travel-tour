import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import TourOpen from '../../components/sections/TourOpen/TourOpen'
import { useParams } from 'react-router-dom'
import ToursDestinations from '../../data/ToursDestinations'
import Gallery from '../../components/sections/Gallery/Gallery'
import { motion } from 'framer-motion'


const Destinations_Details = () => {

  /* Receive id : */
  const { id } = useParams();
  const item = ToursDestinations[id - 1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HeroPage title="Destination Details" />
      <TourOpen item={item} />
      <Gallery />

    </motion.div>
  )
}

export default Destinations_Details