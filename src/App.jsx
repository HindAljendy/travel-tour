import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Blog from './pages/Blog/Blog'
import Destinations from './pages/Destinations/Destinations'
import Tours from './pages/Tours/Tours'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/destinations" element={<Destinations />} />


      </Routes>

    </>
  )
}

export default App
