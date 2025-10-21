import React from 'react'
import './AllRecentPosts.css'
import Blogs from '../../data/Blogs';
import RecentPostCard from '../RecentPostCard/RecentPostCard';

const AllRecentPosts = () => {

    //! recent posts : last Three days :
    const recentDays = 5;
    const now = new Date('June 10, 2025');

    const recentBlogs = Blogs.filter(blog => {

        const blogDate = new Date(blog.publish_date);
        const diffTime = Math.abs(now - blogDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays <= recentDays;
    });

    //! Sort posts from oldest to newest: 
    const sortedRecentBlogs = recentBlogs.slice().sort((a, b) => {
        const dateA = new Date(a.publish_date);
        const dateB = new Date(b.publish_date);
        return dateA - dateB;
    });

    return (
        <div className='AllRecentPosts'>
            {sortedRecentBlogs.length > 0 ? (
                sortedRecentBlogs.map((blog) => {
                    return (
                        <RecentPostCard
                            key={blog.id}
                            blog_img={blog.main_image}
                            publish_date={blog.publish_date}
                            name={blog.name}
                            /* send blog object */
                            blogData={blog}
                        />
                    )
                })
            ) : null
            }
        </div>
    )
}

export default AllRecentPosts