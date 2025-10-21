import React from 'react'
import './RecentPostCard.css'
import { SlCalender } from 'react-icons/sl'
import { useNavigate } from 'react-router-dom'

const RecentPostCard = ({blog_img , publish_date , name ,blogData}) => {

    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate('/blog-details' , {state : blogData});
    }

    return (
        <div className='RecentPostCard' onClick={handleViewDetails}>
            <img src={blog_img} alt="blog" />
            <div className='info'>
                <small><SlCalender className='icon' />{publish_date}</small>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default RecentPostCard