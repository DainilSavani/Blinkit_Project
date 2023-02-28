import React, { Component } from 'react'

class ItemPriceValue extends Component {
    render() {
        const {oldPrice, newPrice} = this.props;
        return (
            <div className="value">
                <p>₹{newPrice}</p>
                <s>₹{oldPrice}</s>
            </div>
        )
    }
}

export default ItemPriceValue
