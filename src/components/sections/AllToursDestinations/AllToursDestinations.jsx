import React, { useEffect, useState } from 'react'
import './AllToursDestinations.css'
import ToursDestinations from '../../../data/ToursDestinations'
import { BiListUl, BiSolidGrid } from 'react-icons/bi'
import CardTour from '../../CardTour/CardTour'

const AllToursDestinations = () => {

    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedTripTypes, setSelectedTripTypes] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState([]);
    const [viewMode, setViewMode] = useState('grid');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 582) {
                setViewMode('list');
            } else {
                setViewMode('grid');
            }
        };
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /* Calculate the number of trips to each location */
    const locationCounts = ToursDestinations.reduce((acc, tour) => {
        if (acc[tour.location]) {
            acc[tour.location]++;
        }
        else {
            acc[tour.location] = 1;
        }
        return acc;
    }, {})

    console.log(locationCounts); /*{Canada: 2, France: 4, Emirates: 2, Europe: 2} conatin location , count*/

    /* Calculate the number of trips to each acticity */
    const activityCounts = ToursDestinations.reduce((acc, tour) => {
        if (acc[tour.activity]) {
            acc[tour.activity]++;
        }
        else {
            acc[tour.activity] = 1;
        }
        return acc;
    }, {})



    /* Calculate the number of trips to each trip type */
    const tripTypesCounts = ToursDestinations.reduce((acc, tour) => {
        if (acc[tour.tripTypes]) {
            acc[tour.tripTypes]++;
        }
        else {
            acc[tour.tripTypes] = 1;
        }
        return acc;
    }, {})


    //! Filters :
    const handleCheckboxChange = (type, value) => {
        if (type === 'location') {
            setSelectedLocations((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        } else if (type === 'tripType') {
            setSelectedTripTypes((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        } else if (type === 'activity') {
            setSelectedActivity((prev) =>
                prev.includes(value)
                    ? prev.filter((item) => item !== value)
                    : [...prev, value]
            );
        }
    };

    const filteredTours = ToursDestinations.filter((tour) => {
        const locationMatch = selectedLocations.length === 0 || selectedLocations.includes(tour.location);
        const tripTypeMatch = selectedTripTypes.length === 0 || selectedTripTypes.includes(tour.tripTypes);
        const activitiesMatch = selectedActivity.length === 0 || selectedActivity.includes(tour.activity);
        return locationMatch && tripTypeMatch && activitiesMatch;
    });


    const handleClearAll = () => {
        setSelectedLocations([]);
        setSelectedTripTypes([]);
        setSelectedActivity([]);
    };


    return (
        <div className='section AllToursDestinations'>
            <div className="container">
                <div className="content-tours-destinations">
                    <div className="part-left sticky">
                        <div className="tour-category">
                            <h2>Criteria</h2>
                            <button onClick={handleClearAll}>Clear All</button>
                        </div>

                        <div className="tour-category-box">
                            <h2>Destination</h2>
                            <div className="box">
                                {Object.entries(locationCounts).map(([location, count]) => (
                                    <div className="option" key={location}>
                                        <label htmlFor={location}>
                                            <input
                                                type="checkbox"
                                                id={location}
                                                name={location}
                                                checked={selectedLocations.includes(location)}
                                                onChange={() => handleCheckboxChange('location', location)}
                                            />
                                            {location}
                                        </label>
                                        <span>{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tour-category-box">
                            <h2>Activities</h2>
                            <div className="box">
                                {Object.entries(activityCounts).map(([activity, count]) => (
                                    <div className="option" key={activity}>
                                        <label htmlFor={activity}>
                                            <input
                                                type="checkbox"
                                                id={activity}
                                                name={activity}
                                                checked={selectedActivity.includes(activity)}
                                                onChange={() => handleCheckboxChange('activity', activity)}
                                            />
                                            {activity}
                                        </label>
                                        <span>{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tour-category-box">
                            <h2>Trip Type</h2>
                            <div className="box">
                                {Object.entries(tripTypesCounts).map(([tripType, count]) => (
                                    <div className="option" key={tripType}>
                                        <label htmlFor={tripType}>
                                            <input
                                                type="checkbox"
                                                id={tripType}
                                                name={tripType}
                                                checked={selectedTripTypes.includes(tripType)}
                                                onChange={() => handleCheckboxChange('tripType', tripType)}
                                            />
                                            {tripType}
                                        </label>
                                        <span>{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="part-right">
                        <div className="sort">
                            <span>Sort :</span>
                            <div className='icons-sort'>
                                <BiListUl className={`icon ${viewMode === 'list' ? 'active' : ''}`}
                                    onClick={() => setViewMode('list')}
                                />
                                <BiSolidGrid className={`icon show ${viewMode === 'grid' ? 'active' : ''}`}
                                    onClick={() => setViewMode('grid')} />
                            </div>
                        </div>

                        <div className={`showdata ${viewMode === 'grid' ? 'grid-container' : 'list-container'}`}>
                            {
                                filteredTours.length > 0 ? (
                                    filteredTours.map(tour => (
                                        <CardTour
                                            key={tour.id}
                                            imageTour={tour.image}
                                            location={tour.location}
                                            name={tour.name}
                                            days={tour.days}
                                            /* send tour object */
                                            tourData={tour}
                                        />
                                    ))
                                ) : (
                                    <p className='no-found'>No matching tours found .</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllToursDestinations
