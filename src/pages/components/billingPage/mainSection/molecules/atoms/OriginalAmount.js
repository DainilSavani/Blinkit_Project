import React from 'react'

function OriginalAmount(props) {
    const { originalAmount } = props;
    return (
        <div className="originalAmount">
            <p>MRP</p>
            <p>₹{originalAmount}</p>
        </div>
    )
}

export default OriginalAmount