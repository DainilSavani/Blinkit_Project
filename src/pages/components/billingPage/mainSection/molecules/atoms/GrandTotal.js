import React from 'react'

function GrandTotal(props) {
    const { grandTotal } = props
    return (
        <div className="grandTotal">
            <p>Grand total</p>
            <p>₹{grandTotal}</p>
        </div>
    )
}

export default GrandTotal