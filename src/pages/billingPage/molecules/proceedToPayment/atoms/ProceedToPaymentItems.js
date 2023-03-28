import React, { Component } from 'react';
import { connect } from 'react-redux'

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

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

export default connect(mapStateToProps)(ProceedToPaymentItems);