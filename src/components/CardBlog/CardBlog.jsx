import React from 'react'
import './CardBlog.css'
import { useNavigate } from 'react-router-dom';

const CardBlog = ({ imgBlog, name, author_name, publish_date, blogData }) => {

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate('/blog-details', { state: blogData });
    }

    return (
        <div className='card-blog'>
            <img src={imgBlog} alt="imgBlog" />

            <div className="card-details">
                <span className='read-more' onClick={handleViewDetails}>Read More</span>
                <div className="detail">
                    <h2>{name}</h2>
                    <p>{author_name}. {publish_date}</p>
                </div>
            </div>
        </div>
    )
}

export default CardBlog