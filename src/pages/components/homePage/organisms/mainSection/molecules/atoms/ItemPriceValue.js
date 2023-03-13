import React, { Component } from 'react'

class ItemPriceValue extends Component {
    render() {
        const {price, mrp} = this.props;
        return (
            <div className="value">
                <p>₹{price}</p>
                <s>₹{mrp}</s>
            </div>
        )
    }
}

export default ItemPriceValue
