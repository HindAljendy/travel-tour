import React, { useState } from 'react'
import './ContentBlogPage.css'
import AllBlogsCards from '../AllBlogsCards/AllBlogsCards'
import { BiSearch } from 'react-icons/bi'
import { FaAsterisk } from 'react-icons/fa'
import AllRecentPosts from '../../AllRecentPosts/AllRecentPosts'
import Blogs from '../../../data/Blogs'

const ContentBlogPage = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const [filter, setFilter] = useState('');
    const handleFilterSearchChange = (event) => setFilter(event.target.value);


    //! Categories:
    /* Calculate the number of blogs to each  category */

    const categoryCounts = Blogs.reduce((acc, blog) => {
        if (acc[blog.category]) {
            acc[blog.category]++;
        }
        else {
            acc[blog.category] = 1;
        }
        return acc;
    }, {});

    console.log('categoryCounts', categoryCounts); /* {Adventure: 2, City Tour: 1}  conatin category , count */

    /* Filter blogs when click on category */
    const filteredBlogsByCategory = selectedCategory ?
        Blogs.filter(blog => blog.category === selectedCategory)
        : Blogs;


    //! Search :
    /* Filter By the search box  (Dependent on array that filter by category ,
        Which shows whether only filtered blogs or all of them appear) 
    */
    const finalFilteredBlogs = filteredBlogsByCategory.filter(blog =>
        blog.name.toLowerCase().includes(filter.toLowerCase()) ||
        blog.author_name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className='section content-blog-page'>
            <div className="container">
                <div className="content">
                    <div className="part-left">
                        <AllBlogsCards finalFilteredBlogs={finalFilteredBlogs} />
                    </div>

                    <div className="part-right">
                        <div className='posts-info'>
                            <div className="search">
                                <span>Search</span>
                                <div className='input-search'>
                                    <input
                                        type="search"
                                        name="seach_blog"
                                        placeholder='Search..'
                                        value={filter}
                                        onChange={handleFilterSearchChange}
                                    />
                                    <button><BiSearch /></button>
                                </div>
                            </div>


                            <div className="categories">
                                <span>Categories</span>
                                <ul>
                                    {
                                        Object.entries(categoryCounts).map(([category, count]) => (

                                            <li key={category} onClick={() => setSelectedCategory(category)}
                                            >
                                                <h6 className={selectedCategory === category ? 'active' : ''}>
                                                    <FaAsterisk className='icon' />{category}
                                                </h6>
                                                <span>{count}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="recent-posts">
                            <span>Recent Posts</span>

                            <div className='all-posts-recent'>
                                <AllRecentPosts />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBlogPage

