import React, { Component } from 'react'

class OriginalAmount extends Component {
    render() {
        const {originalAmount} = this.props;
        return (
            <div className="originalAmount">
                <p>MRP</p>
                <p>₹{originalAmount}</p>
            </div>
        )
    }
}

export default OriginalAmount
