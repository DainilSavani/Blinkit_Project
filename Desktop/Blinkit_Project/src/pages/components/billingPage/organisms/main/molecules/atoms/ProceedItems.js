import React, { Component } from 'react';

class ProceedItems extends Component {
    render() {
        const { itemsCount, itemsMRP, itemsAmount } = this.props.cartStatus;
        return (
            <div className="proceedItems">
                <p>{itemsCount}</p>
                <p>items</p>
                <p>:</p>
                <p>₹{itemsAmount}</p>
                <s>₹{itemsMRP}</s>
            </div>
        )
    }
}

export default ProceedItems
