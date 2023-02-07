import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ProceedToPaymentItems extends Component {
    render() {
        const { itemsCount, itemsOriginalPrice, itemsDiscountedPrice } = this.props.cartDetails;
        return (
            <div className="proceedItems">
                <p>{itemsCount}</p>
                <p>items</p>
                <p>:</p>
                <p>₹{itemsDiscountedPrice}</p>
                <s>₹{itemsOriginalPrice}</s>
            </div>
        )
    }
}

ProceedToPaymentItems.propTypes = {
    itemsCount: PropTypes.number,
    itemsOriginalPrice: PropTypes.number,
    itemsDiscountedPrice: PropTypes.number
}
ProceedToPaymentItems.defaultProps = {
    itemsCount: 0,
    itemsOriginalPrice: 0,
    itemsDiscountedPrice: 0
}

export default ProceedToPaymentItems