import React from 'react'
import './TourInfoAll.css'
import TourInfo from '../TourInfo/TourInfo'
import { BiBuilding } from 'react-icons/bi'
import { MdOutlinePlace } from 'react-icons/md'
import { CiBookmarkCheck, CiCalendarDate, CiMoneyCheck1 } from 'react-icons/ci'
import { LiaLanguageSolid } from 'react-icons/lia'
import { FaUser } from 'react-icons/fa'
import { SiActivitypub } from 'react-icons/si'

const TourInfoAll = ({item}) => {
    return (
        <div className='All-Tours-Info'>
            <TourInfo icon={<BiBuilding />} title="Accommodattion"  text={item.accommodattion} />
            <TourInfo icon={<MdOutlinePlace />} title="Arrival city"  text={item.arraivalCity} />
            <TourInfo icon={<CiCalendarDate />} title="Best season"  text={item.bestSeason} />

            <TourInfo icon={<LiaLanguageSolid />} title="Language"  text={item.lanuage} />

            <TourInfo icon={<FaUser />} title="Minimum Age"  text={item.minimumAge} />
            <TourInfo icon={<FaUser />} title="Maximum Age"  text={item.maximumAge} />

            <TourInfo icon={<CiBookmarkCheck />} title="Hotel Transfer"  text={item.hotelTransfer} />
            <TourInfo icon={<CiBookmarkCheck />} title="Guide"           text={item.guide} />

            <TourInfo icon={<CiCalendarDate />} title="Days"  text={item.days} />

            <TourInfo icon={<CiMoneyCheck1  />} title="Price"  text={item.price} />
            <TourInfo icon={<SiActivitypub />} title="Acctivity"  text={item.activity} />
            <TourInfo icon={<CiMoneyCheck1 /> } title="Trip Type"  text={item.tripTypes} />
        </div>
    )
}

export default TourInfoAll