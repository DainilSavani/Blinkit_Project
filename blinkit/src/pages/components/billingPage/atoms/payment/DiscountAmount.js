import React, { Component } from 'react'

class DiscountAmount extends Component {
    render() {
        const {productDiscount} = this.props
        return (
            <div className="productDiscount">
                <p>Product discount</p>
                <p>-₹{productDiscount}</p>
            </div>
        )
    }
}

export default DiscountAmount
