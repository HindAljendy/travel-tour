import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import ContactSection from '../../components/sections/ContactUs_section/ContactSection'


const ContactUs = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <HeroPage title="Contact" />
      <ContactSection/>
    </motion.div>

  )
}

export default ContactUs