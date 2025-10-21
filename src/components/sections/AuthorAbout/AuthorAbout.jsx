import React from 'react'
import './AuthorAbout.css'

const AuthorAbout = ({ author_image, author_name, author_info }) => {
    return (
        <div className='about-author'>
            <h3>About me</h3>
            <div className="image">
                <img src={author_image} alt="author_image" />
            </div>
            <p>Hey there! I'm <strong>{author_name}</strong>, an American who's
                been traveling the world full time for 9 years now.
            </p>
            <p>{author_info}</p>
        </div>
    )
}

export default AuthorAbout