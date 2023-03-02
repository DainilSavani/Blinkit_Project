import React, { Component } from 'react'

class GrandTotal extends Component {
    render() {
        const {grandTotal} = this.props
        return (
            <div className="grandTotal">
                <p>Grand total</p>
                <p>₹{grandTotal}</p>
            </div>
        )
    }
}

export default GrandTotal
