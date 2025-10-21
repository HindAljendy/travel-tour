import React from 'react'
import './BigCardBlog.css'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const BigCardBlog = ({ publishDate, name, blog_img, author_img, author_name, overview  , blogData}) => {

    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate('/blog-details' , {state : blogData});
    }

    return (
        <div className='BigCardBlog'>
            <img src={blog_img} alt="blog" className='main-image' />
            <div className='body-card'>
                <div className="details-publish">
                    <div className='image'>
                        <img src={author_img} alt="author" />
                    </div>
                    <span>By {author_name}  | <strong>{publishDate}</strong></span>
                </div>

                <h3 onClick={handleViewDetails}>{name}</h3>
                <p>{overview}</p>

                <button onClick={handleViewDetails}>Read More <FaAngleDoubleRight className='icon' /></button>

            </div>

        </div>
    )
}

export default BigCardBlog