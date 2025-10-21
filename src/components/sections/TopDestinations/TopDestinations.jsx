import React from 'react'
import './TopDestinations.css'
import AboutTitle from '../AboutTitle/AboutTitle'
import CardTopDestination from '../../CardTopDestination/CardTopDestination'
import ToursDestinations from '../../../data/ToursDestinations'

const TopDestinations = () => {

    const lastThreeTours = ToursDestinations.slice(-3);

    return (
        <div className='section top-destinations '>
            <AboutTitle title="Top Destinations" />
            <div className="container">
                <div className="All-cards">
                    {
                        lastThreeTours.map((tour, index) => (
                            <CardTopDestination
                                key={index}
                                image={tour.image}
                                place={tour.name}
                                price={tour.price}
                                day={tour.days}
                                /* send id */
                                id={tour.id}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TopDestinations