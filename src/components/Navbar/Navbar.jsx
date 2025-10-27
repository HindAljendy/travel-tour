import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SearchComponent from '../SearchComponent/SearchComponent'

const Navbar = () => {

    //! useState for  open menu mobile and apply style menu-icon when click :
    const [click, setClick] = useState(false) // boolean
    const handleClick = () => setClick(!click);

    //! useState for change navbar background when i want to scroll the website :
    const [sticky, setSticky] = useState(false);//boolean

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            }
            else {
                setSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    //! Modal Searching
    const [showModal, setShowModal] = useState(false); // boolean
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);


    return (
        <>
            <nav className={`navbar ${sticky ? 'light-nav' : ''}`}>
                {/* logo */}
                <Link to="/">
                    <h1 className='logo'>Frost<span>Quest</span></h1>
                </Link>

                <div className='content'>
                    {/* search-icon */}
                    <button className='search' onClick={handleOpenModal}><FaSearch /></button>
                    {
                        showModal && (
                            <SearchComponent handleCloseModal={handleCloseModal} />
                        )
                    }
                    {/* navlinks */}
                    <ul className={`navlinks ${click ? 'show-navlinks' : 'hide-navlinks'} ${sticky ? 'dark-menu' : ''}`}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about-us">About</Link></li>
                        <li><Link to="/tour">Tour</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                    {/* menu-icon */}
                    <div className="hamburger" onClick={handleClick}>

                        {click ?
                            <FaTimes />
                            : <FaBars />
                        }

                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar