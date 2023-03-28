import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// helper functions
import clearCartClickHandler from '../../../../helpers/clearShoppingData';

// style
import './orderConfirmationSection.scss';

class OrderConfirmationSection extends Component {
    render() {
        const { cartDetails, appSetState } = this.props;
        const { itemsDiscountedPrice, itemsOriginalPrice } = cartDetails;
        return (
            <div className='orderConfirmationSection'>
                <i className='fa fa-check-circle'></i>
                <p>Order Placed!!!</p>
                <p>Your order will arrive in 10 minutes.</p>
                <p className='billAmount'>Total amount paid: <b>₹{itemsDiscountedPrice}</b> <s>₹{itemsOriginalPrice}</s></p>
                <p className='totalSavnigs'>Total savings: <b>₹{itemsOriginalPrice - itemsDiscountedPrice}</b></p>
                <Link to='/' className='logoLink'>
                    <button className='orderDetails' onClick={() => clearCartClickHandler(appSetState)}>continue shopping</button>
                </Link>
            </div>
        )
    }
}

OrderConfirmationSection.propTypes = {
    cartDetails: PropTypes.object
}
OrderConfirmationSection.defaultProps = {
    cartDetails: {}
}

export default OrderConfirmationSection