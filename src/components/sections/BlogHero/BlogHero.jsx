import React from 'react'
import './BlogHero.css'
import { Link } from 'react-router-dom'
import { FaGear } from 'react-icons/fa6'

const BlogHero = ({ image, title }) => {
    return (
        <div className='BlogHero'>
            <div className="image">
                <img src={image} alt="blog_image" />
            </div>
            <div className="info">
                <h2>{title}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><FaGear /> {title} </li>
                </ul>
            </div>
        </div>
    )
}

export default BlogHero