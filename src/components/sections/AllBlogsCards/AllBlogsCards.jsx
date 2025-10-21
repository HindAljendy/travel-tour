import React from 'react'
import './AllBlogsCards.css'
import BigCardBlog from '../../BigCardBlog/BigCardBlog'


const AllBlogsCards = ({ finalFilteredBlogs }) => {

    return (
        <div className='AllBlogsCards'>

            {finalFilteredBlogs.length > 0 ? (
                finalFilteredBlogs.map((blog) => {

                    const words = blog.overview.split(' ');
                    const firstTenWords = words.slice(0, 40).join(' ');

                    return (

                        <BigCardBlog
                            key={blog.id}
                            publishDate={blog.publish_date}
                            name={blog.name}
                            blog_img={blog.main_image}
                            author_img={blog.author_image}
                            author_name={blog.author_name}
                            overview={firstTenWords + '...'}
                            blogData={blog}
                        />
                    )
                })
            ) : (
                <p className='no-found'>No matching blogs found .</p>
            )}
        </div>
    )
}

export default AllBlogsCards