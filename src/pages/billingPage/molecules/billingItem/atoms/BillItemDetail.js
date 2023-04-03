import React, { Component } from 'react';

export class BillItemDetail extends Component {
    render() {
        const { name, weight, discountedPrice, originalPrice } = this.props;
        const vegetableItemWeight = weight>=1 ? weight+"kg" : (weight*1000)+"g";
        return (
            <div className='billItemDetail'>
                <div className="billItemName">{name}</div>
                <div className="billItemWeight">{vegetableItemWeight}</div>
                <div className="billItemPrice">
                    <p>₹{discountedPrice}</p>
                    <s>₹{originalPrice}</s>
                </div>
            </div>
        )
    }
}

export default BillItemDetail
