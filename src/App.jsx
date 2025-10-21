import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Blog from './pages/Blog/Blog'
import Destinations from './pages/Destinations/Destinations'
import Tours from './pages/Tours/Tours'
import FooterPage from './components/sections/FooterPage/FooterPage'
import Tours_Details from './pages/Tours_Details/Tours_Details'
import Destinations_Details from './pages/Destinations_Details/Destinations_Details'
import { useEffect } from 'react'
import Blog_Details from './pages/Blog_Details/Blog_Details'


function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/blog" element={<Blog />} />
         {/* hide id from URL: */}
        <Route path="/blog-details" element={<Blog_Details />} />

        <Route path="/tour" element={<Tours />} />
        {/* hide id from URL: */}
        <Route path="/tour-details" element={<Tours_Details />} />

        <Route path="/destinations" element={<Destinations />} />
        {/* show id in URL: */}
        <Route path="/destination-details/:id" element={<Destinations_Details />} />
      </Routes>

      {location.pathname !== '/' && <FooterPage />}

    </>
  )
}

export default App
