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
import { useEffect, useState } from 'react'
import Blog_Details from './pages/Blog_Details/Blog_Details'
import SearchResultPage from './pages/SearchResultPage/SearchResultPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTop_Button from './components/BackToTop_Button/BackToTop_Button'
import Loading from './components/Loading/Loading'

function App() {

  //! Loading  :
  const [loadingBegin, setLoadingBegin] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingBegin(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);


  //! Paths :
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      {loadingBegin && <Loading/> }

      <ToastContainer />

      <BackToTop_Button />

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

        <Route path="/search-result" element={<SearchResultPage />} />

      </Routes>

      {location.pathname !== '/' && <FooterPage />}

    </>
  )
}

export default App
