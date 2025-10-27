import React, { useState } from 'react'
import './SearchComponent.css'
import { BiSearch } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import Blogs from '../../data/Blogs'
import ToursDestinations from '../../data/ToursDestinations'
import close from './../../assets/new/close_search.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SearchComponent = ({ handleCloseModal }) => {

    const navigate = useNavigate();
    const location = useLocation();

    //! UseState for store filter 
    const [filter, setFilter] = useState(''); // string

    //! A function to update the filter whenever the user enters text into the input box.
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    //! filter process :

    const handleSearchResult = () => {

        // Check if the search is not empty
        if (filter.trim() === "") {
            toast.error('Please fill the field first..', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return; // stop
        }

        localStorage.clear();

        const filteredBlogs = Blogs.filter(blog =>
            blog.name.toLowerCase().includes(filter.toLowerCase()) ||
            blog.author_name.toLowerCase().includes(filter.toLowerCase()) ||
            blog.category.toLowerCase().includes(filter.toLowerCase())
        );

        const filteredTours = ToursDestinations.filter(tour =>
            tour.name.toLowerCase().includes(filter.toLowerCase()) ||
            tour.location.toLowerCase().includes(filter.toLowerCase())
        );

        //! store results in localStorage :
        localStorage.setItem(
            'searchResults',
            JSON.stringify({ blogs: filteredBlogs, tours: filteredTours })
        );
        localStorage.setItem('searchKeyword', filter);

        //! Dispatch custom event to notify other components:
        window.dispatchEvent(new Event('searchUpdated'));

        //! location.pathname :
        if (location.pathname !== '/search-result') {
            navigate('/search-result');
        } else {
            handleCloseModal();
        }
    };

    return (
        <div className='Search-Modal'>
            <div className="modal-body">
                <div className='part-top'>
                    <h5>Search</h5>
                    <FaTimes className='icon-close' onClick={handleCloseModal} />
                </div>

                <div className='input-search'>
                    {/* Search button */}
                    <button className='search-result'

                        onClick={handleSearchResult}
                    >
                        <BiSearch className='icon-search' />
                    </button>

                    {/* search box */}
                    <input
                        type="search"
                        name="search"
                        placeholder='Search here..'
                        required
                        value={filter}
                        onChange={handleFilterChange}
                    />

                    {/* close search button */}
                    <button className='close-search'
                        onClick={() => handleFilterChange({ target: { value: '' } })}
                    >
                        <img src={close} alt="close" />
                    </button>

                </div>
            </div>

        </div>
    )
}

export default SearchComponent