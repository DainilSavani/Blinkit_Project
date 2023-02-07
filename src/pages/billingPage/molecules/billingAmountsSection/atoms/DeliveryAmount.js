import React, { Component } from 'react'

class DeliveryAmount extends Component {
    render() {
        const { deliveryAmount } = this.props;
        return (
            <div className="deliveryAmount">
                <s>₹{ deliveryAmount }</s>
                <p>FREE</p>
            </div>
        )
    }
}

export default DeliveryAmount
