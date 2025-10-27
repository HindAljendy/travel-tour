import CardTour from '../../CardTour/CardTour';
import BigCardBlog from '../../BigCardBlog/BigCardBlog';
import './SearchResult.css'

const SearchResult = ({ results, keyword }) => {

    const noResults = results.blogs.length === 0 && results.tours.length === 0;

    return (
        <div className='section search-result'>
            <div className="container">
                <div className='content-pageSearch'>
                    <h3>Search results for "<span>{keyword}</span>"</h3>

                    {noResults ? (
                        <p className='no-found'>
                            Sorry, but nothing matched your search terms. Please try again with some different keywords.
                        </p>
                    ) : (
                        <>
                            {results.blogs.length > 0 && (
                                <div>
                                    <h4>Blogs :</h4>
                                    <div className='show-result'>
                                        {results.blogs.map(blog => {
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
                                                    /* send blog object */
                                                    blogData={blog}
                                                />
                                            );
                                        })}

                                    </div>

                                </div>
                            )}

                            {results.tours.length > 0 && (
                                <div>
                                    <h4>Tours:</h4>
                                    <div className='show-result'>
                                        {results.tours.map(tour => (
                                            <CardTour
                                                key={tour.id}
                                                imageTour={tour.image}
                                                location={tour.location}
                                                name={tour.name}
                                                days={tour.days}
                                                /* send tour object */
                                                tourData={tour}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

        </div >
    )
}

export default SearchResult