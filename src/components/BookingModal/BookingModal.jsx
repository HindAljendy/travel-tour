import React, { useState } from 'react'
import './BookingModal.css'
import { FaTimes } from 'react-icons/fa'
import { BiArrowFromTop, BiArrowToTop } from 'react-icons/bi';

const BookingModal = ({ handleCloseModal, item }) => {

    //!  Booking Summary :

    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(1);

    const price_perAdult = parseInt(item?.price.replace(/\D/g, ""));
    const price_perChild = parseInt(item?.price_child.replace(/\D/g, ""));

    const adultTotal = adultCount * price_perAdult;
    const childTotal = childCount * price_perChild;
    const total = adultTotal + childTotal;


    /* current Day : */
    const currentDate = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    /* functions: increment , decrement */
    const handleAdultIncrement = () => {
        setAdultCount(prev => prev + 1);
    };

    const handleAdultDecrement = () => {
        setAdultCount(prev => Math.max(prev - 1, 1));//This is to ensure that the value is not less than 1, so no number less than 1 is allowed.
    };

    const handleChildIncrement = () => {
        setChildCount(prev => prev + 1);
    };

    const handleChildDecrement = () => {
        setChildCount(prev => Math.max(prev - 1, 1));
    };


    return (
        <div className='BookingModal'>
            <div className="modal-body">
                <div className='left'>
                    <h4>Travellers</h4>
                    <div className="cards">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h6>Adult</h6>
                                    <small>/Person</small>
                                </div>
                                <span>{item.price}</span>

                                <div className='field'>
                                    <BiArrowFromTop className='arrow-decrement' onClick={handleAdultDecrement} />
                                    <input
                                        name="numbers_adults"
                                        type="number"
                                        readOnly
                                        min={1}
                                        value={adultCount}
                                        onChange={(e) => setAdultCount(Number(e.target.value))}
                                    />
                                    <BiArrowToTop className='arrow-increment' onClick={handleAdultIncrement} />
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <h6>Child</h6>
                                    <small>/Person</small>
                                </div>
                                <span>{item.price_child}</span>

                                <div className='field'>
                                    <BiArrowFromTop className='arrow-decrement' onClick={handleChildDecrement} />
                                    <input
                                        name="numbers_childs"
                                        type="number"
                                        readOnly
                                        min={1}
                                        value={childCount}
                                        onChange={(e) => setChildCount(Number(e.target.value))}
                                    />
                                    <BiArrowToTop className='arrow-increment' onClick={handleChildIncrement} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className='checkout'>Proceed To Checkout</button>
                </div>

                <div className='right'>
                    <div className='part-top'>
                        <h4>Booking Summary</h4>
                        <FaTimes className='icon' onClick={handleCloseModal} />
                    </div>

                    <span>{item.name}</span>
                    <p>Starting Date : <strong>{formattedDate}</strong></p>

                    <div className='total'>
                        <div className='summary'>
                            <span>Adult : {adultCount}  x ${price_perAdult} <strong>${adultTotal.toLocaleString()}</strong></span>
                            <span>Child : {childCount}  x ${price_perChild} <strong>${childTotal.toLocaleString()}</strong></span>
                        </div>
                        <span className='font-w'>Total :  <strong>${total.toLocaleString()}</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingModal