import React, { useEffect, useRef, useState } from 'react'
import './BlogOpen.css'
import AuthorAbout from '../AuthorAbout/AuthorAbout';
import AllRecentPosts_Blog from '../AllRecentPosts_Blog/AllRecentPosts_Blog';

const BlogOpen = ({ item }) => {

    const [showContents, setShowContents] = useState(false);

    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        if (activeSection !== null && sectionRefs.current[activeSection]) {
            sectionRefs.current[activeSection].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [activeSection]);

    console.log('activeSection', activeSection);
    console.log('sectionRefs New', sectionRefs.current[activeSection]);

    return (
        <div className='section blog-open'>
            <div className="container">
                <div className="all-parts">
                    <div className="content-page-blogOpen">
                        <h3 className='main-title'>introduction</h3>
                        <p>{item.overview}</p>
                        <div className='table-contents'>
                            <h5>Table Of Contents [<span
                                onClick={() => setShowContents(!showContents)}>
                                {showContents ? 'hide' : 'show'}</span>]
                            </h5>

                            {
                                showContents && (
                                    <div className={`list-contents ${showContents ? 'show' : ''}`}>
                                        <ol>
                                            {item.content.map((mini_item, index) => (
                                                <li key={index}
                                                    onClick={() => setActiveSection(index)}
                                                >{mini_item.name}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )
                            }
                        </div>

                        {/* contents  */}
                        <div className='contents-page'>
                            {
                                item.content.map((mini_item, index) => (
                                    <div key={index}
                                        ref={(el) => (sectionRefs.current[index] = el)}

                                        style={{ marginBottom: '50px' }}

                                    >
                                        <h3 className='main-title'>{mini_item.name}</h3>
                                        <p>{mini_item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className='second-part'>
                        <AuthorAbout
                            author_image={item.author_image}
                            author_name={item.author_name}
                            author_info={item.author_info}
                        />

                        <AllRecentPosts_Blog />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default BlogOpen