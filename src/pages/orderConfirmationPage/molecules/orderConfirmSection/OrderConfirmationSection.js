import React, { Component } from 'react';

// style
import './orderConfirmationSection.scss';

class OrderConfirmationSection extends Component {
    render() {
        const { userLocation, cartDetails } = this.props;
        const { itemsDiscountedPrice, itemsOriginalPrice } = cartDetails;
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
}

export default OrderConfirmationSection;