import React, { Component } from 'react';

export class BillItemDetail extends Component {
    render() {
        const { vegetableItem } = this.props;
        const vegetableItemWeight = vegetableItem.weight>=1 ? vegetableItem.weight+"kg" : (vegetableItem.weight*1000)+"g";
        return (
            <div className='billItemDetail'>
                <div className="billItemName">{vegetableItem.name}</div>
                <div className="billItemWeight">{vegetableItemWeight}</div>
                <div className="billItemPrice">
                    <p>₹{vegetableItem.discountedPrice}</p>
                    <s>₹{vegetableItem.originalPrice}</s>
                </div>
            </div>
        )
    }
}

export default BillItemDetail
