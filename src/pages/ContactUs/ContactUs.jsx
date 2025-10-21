import React from 'react'
import { motion } from 'framer-motion'


const ContactUs = () => {
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>ContactUs</div>
    </motion.div>

  )
}

export default ContactUs