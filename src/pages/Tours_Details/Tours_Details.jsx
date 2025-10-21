import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import TourOpen from '../../components/sections/TourOpen/TourOpen'
import { useLocation } from 'react-router-dom'
import Gallery from '../../components/sections/Gallery/Gallery'
import { motion } from 'framer-motion'


const Tours_Details = () => {

  /* Receive object : */
  const location = useLocation();
  const item = location.state;

  console.log('item', item);
  console.log('location', location);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HeroPage title={item.name} />
      <TourOpen item={item} />
      <Gallery />
      
    </motion.div>
  )
}

export default Tours_Details