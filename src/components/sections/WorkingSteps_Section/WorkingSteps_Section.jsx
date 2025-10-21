import React from 'react'
import './WorkingSteps_Section.css'
import Feature_1 from './../../../assets/Feature-image-1.webp'
import Feature_2 from './../../../assets/Feature-image-2.webp'
import SectionTitle from '../../SectionTitle/SectionTitle'
import CardWorkingStep from '../../CardWorkingStep/CardWorkingStep'
import ImgStep1 from './../../../assets/steps-1.svg'
import ImgStep2 from './../../../assets/steps-2.svg'
import ImgStep3 from './../../../assets/steps-3.svg'

const WorkingSteps_Section = () => {
    return (
        <div className='section WorkingSteps'>

            <img src={Feature_1} alt="Feature_1" className='image-girl' />
            <img src={Feature_2} alt="Feature_2" className='image-hand' />

            <div className="container">
                <SectionTitle
                    small_title="Working Steps"
                    title="Book Your Next Trip in 3 Steps"
                />
                <div className="content">
                    <div className="All-cards">
                        <CardWorkingStep
                            imgStep={ImgStep1}
                            title="Choose Destination"
                        />
                        <CardWorkingStep
                            imgStep={ImgStep2}
                            title="Make Payment"
                            className="bg-image-card2"
                        />
                        <CardWorkingStep
                            imgStep={ImgStep3}
                            title="Reach Airport on date"
                            className="bg-image-card3"
                        />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkingSteps_Section