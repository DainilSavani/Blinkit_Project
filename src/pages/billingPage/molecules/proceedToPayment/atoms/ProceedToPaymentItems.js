import React, { Component } from 'react';

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

export default ProceedToPaymentItems
