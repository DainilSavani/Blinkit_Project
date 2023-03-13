import React, { Component } from 'react'

class DeliveryAmount extends Component {
    render() {
        return (
            <div className="deliveryCharge">
                <p>Delivery charge</p>
                <div className="deliveryAmount">
                    <s>₹15</s>
                    <p>FREE</p>
                </div>
            </div>
        )
    }
}

export default DeliveryAmount
