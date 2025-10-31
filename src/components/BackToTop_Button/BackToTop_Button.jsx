import React, { useEffect, useState } from 'react'
import './BackToTop_Button.css'
import { FaArrowUp } from 'react-icons/fa'

const BackToTop_Button = () => {
    const [isVisible, setIsVisible] = useState(false) // boolean

    // update state :
    const toggleVisibility = () => {
        if (window.pageYOffset > 250) {
            setIsVisible(true)
        }
        else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    
    // funstion to back to top(0,0)
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }


    return (
        <div className='BackToTop_Button'>
            {
                isVisible && (
                    <button onClick={ScrollToTop}>
                        <FaArrowUp />
                    </button>
                )
            }
        </div>
    )
}

export default BackToTop_Button
