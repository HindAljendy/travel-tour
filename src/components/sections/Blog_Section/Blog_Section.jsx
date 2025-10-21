import React from 'react'
import './Blog_Section.css'
import CardBlog from '../../CardBlog/CardBlog'
import { Link } from 'react-router-dom'
import Blogs from '../../../data/Blogs'


const Blog_Section = () => {

    /* show  Three last blogs */
    const lastBlogs = Blogs.slice(-3);

    return (
        <div className='blog'>
            <div className="container">
                <div className="blog-title">
                    <div className='title'>
                        <h4>BLOG & NEWS</h4>
                        <h2>Get More Update  <br /> News & Blog</h2>
                    </div>
                    <div className='text'>
                        <p>Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts -  your gateway to a world of updates. </p>
                    </div>
                </div>

                <div className="content">
                    <div className="All-cards">
                        {
                            lastBlogs.map((blog) => (
                                <CardBlog
                                    key={blog.id}
                                    imgBlog={blog.main_image}
                                    name={blog.name}
                                    author_name={blog.author_name}
                                    publish_date={blog.publish_date}
                                    /* send blogData object */
                                    blogData={blog}
                                />
                            ))
                        }
                    </div>

                    <p className='opinion'>Want To See Our Top Destinations. <Link to="/destinations">click here to view more.</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Blog_Section
