import React from 'react'
import './Discover_Section.css'
import SectionTitle from '../../SectionTitle/SectionTitle'
import CardDiscover from '../../CardDiscover/CardDiscover'
import Img1 from './../../../assets/Discover-image-1.webp'
import Img2 from './../../../assets/Discover-image-2.webp'
import Img3 from './../../../assets/Discover-image-3.webp'
import Img4 from './../../../assets/Discover-image-4.webp'
import { Link } from 'react-router-dom'

const Discover_Section = () => {
    return (
        <div className='section discover'>
            <SectionTitle
                small_title="Travel Destinatinations"
                title="Discover the Touch of Nature"
                text="Our cLients rave about our  the seamiess experiences that exceeded their expectations ."
            />
            <div className="container">
                <div className='content'>
                    <div className="container-cards">
                        <CardDiscover  discoverImg={Img1}  location="Maldives"/>
                        <CardDiscover  discoverImg={Img2}  location="Vietnam" />
                        <CardDiscover  discoverImg={Img3}  location="Dubai" />
                        <CardDiscover  discoverImg={Img4}  location="Nebal" />
                    </div>
                    <p className='opinion'>Want To See Our Top Destinations. <Link to="/destinations">click here to view more.</Link></p>
                </div>
            </div>
        </div>

    )
}

export default Discover_Section