import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/Navbar'
import HeroPage from '../../components/sections/HeroPage/HeroPage'
import SearchResult from '../../components/sections/SearchResult/SearchResult'
import Gallery from '../../components/sections/Gallery/Gallery'


const SearchResultPage = () => {
    const [results, setResults] = useState({ blogs: [], tours: [] }); // empty array for each key of obj
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        const updateResults = () => {
            const data = localStorage.getItem('searchResults');
            const word = localStorage.getItem('searchKeyword');
            if (data) {
                setResults(JSON.parse(data));
            }
            if (word) {
                setKeyword(word);
            }
        };

        updateResults();

        //! Listen for custom event :
        window.addEventListener('searchUpdated', updateResults);

        return () => window.removeEventListener('searchUpdated', updateResults);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Navbar />
            <HeroPage title="Search Result" />
            <SearchResult results={results} keyword={keyword} />
            <Gallery />
        </motion.div>
    )
}

export default SearchResultPage