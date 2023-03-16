import React from 'react';

function ProceedItems(props) {
    const { itemsCount, itemsMRP, itemsAmount } = props.cartStatus;
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

export default ProceedItems