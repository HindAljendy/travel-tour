import React from 'react'
import './SmallImagesPersons.css'
import client1 from './../../assets/tst-1.webp'
import client2 from './../../assets/tst-2.webp'
import client3 from './../../assets/tst-3.webp'
import client4 from './../../assets/tst-4.webp'

const SmallImagesPersons = () => {
    return (
        <div className="images">
            <img src={client1} alt="img-person" />
            <img src={client2} alt="img-person" />
            <img src={client3} alt="img-person" />
            <img src={client4} alt="img-person" />
        </div>
    )
}

export default SmallImagesPersons