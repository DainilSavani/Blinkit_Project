import React from 'react';
import { useSelector } from 'react-redux'

// style
import './orderConfirmationSection.scss';

function OrderConfirmationSection() {
    const { itemsOriginalPrice, itemsDiscountedPrice } = useSelector(state => state.cartDetails);
    const userLocation = useSelector(state => state.userLocation);
    return (
        <div className='orderConfirmationSection'>
            <i className='fa fa-check-circle'></i>
            <p>Order Placed!!!</p>
            <p>Your order will arrive in 10 minutes.</p>
            <p className='userLocation'>Delivery location: <b>{userLocation}</b></p>
            <p className='billAmount'>Total amount paid: <b>₹{itemsDiscountedPrice}</b> <s>₹{itemsOriginalPrice}</s></p>
            <p className='totalSavnigs'>Total savings: <b>₹{itemsOriginalPrice - itemsDiscountedPrice}</b></p>
            <button className='orderDetails'>continue shopping</button>
        </div>
    )
}

export default OrderConfirmationSection
