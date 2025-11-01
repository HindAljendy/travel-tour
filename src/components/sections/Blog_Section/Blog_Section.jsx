import React from 'react'
import './Blog_Section.css'
import CardBlog from '../../CardBlog/CardBlog'
import { Link } from 'react-router-dom'
import Blogs from '../../../data/Blogs'
import { motion } from "framer-motion";


const Blog_Section = () => {

    //! Animation
    const sectionTitleVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    const parentVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.4
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };


    /* show  Three last blogs */
    const lastBlogs = Blogs.slice(-3);

    return (
        <div className='blog'>
            <div className="container">
                <div className="blog-title">
                    <motion.div
                        className='title'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        variants={sectionTitleVariants}
                    >
                        <h4>BLOG & NEWS</h4>
                        <h2>Get More Update  <br /> News & Blog</h2>
                    </motion.div>

                    <motion.div
                        className='text'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        variants={sectionTitleVariants}
                    >
                        <p>Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts -  your gateway to a world of updates. </p>
                    </motion.div>
                </div>

                <div className="content">
                    <motion.div
                        className="All-cards"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        variants={parentVariants}
                    >
                        {
                            lastBlogs.map((blog) => (
                                <motion.div
                                    variants={childVariants}
                                >
                                    <CardBlog
                                        key={blog.id}
                                        imgBlog={blog.main_image}
                                        name={blog.name}
                                        author_name={blog.author_name}
                                        publish_date={blog.publish_date}
                                        /* send blogData object */
                                        blogData={blog}
                                    />
                                </motion.div>
                            ))
                        }
                    </motion.div>

                    <p className='opinion'>Want To See Our Top Destinations. <Link to="/destinations">click here to view more.</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Blog_Section
