import React from 'react'
import './BlogBanner.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import Button from '../../Button/Button'

const BlogBanner = () => {
    return (
        <div className='section blog-banner'>
            <div className='section-title'>
                <h2>FrostQuest Is A World Leading Online Tour Booking Platform</h2>
            </div>

            <div className="button-banner">
                <Button />
            </div>

        </div>
    )
}

export default BlogBanner