import React from 'react'

function OriginalAmount(props) {
    const {  productDiscount } = props;
    return (
        <div className="productDiscount">
            <p>Product discount</p>
            <p>-₹{productDiscount}</p>
        </div>
    )
}

export default OriginalAmount