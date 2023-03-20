import React, { Component } from 'react'

class ItemPriceValue extends Component {
    render() {
        const { discountedPrice, originalPrice } = this.props;
        return (
            <div className="value">
                <p>₹{ discountedPrice }</p>
                <s>₹{ originalPrice }</s>
            </div>
        )
    }
}

export default ItemPriceValue
