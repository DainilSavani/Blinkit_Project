import React, { Component } from 'react';

export class BillItemDetail extends Component {
    render() {
        const { billingItem } = this.props;
        const billingItemWeight = billingItem.weight>=1 ? billingItem.weight+"kg" : (billingItem.weight*1000)+"g";
        return (
            <div className='billItemDetail'>
                <div className="billItemName">{billingItem.name}</div>
                <div className="billItemWeight">{billingItemWeight}</div>
                <div className="billItemPrice">
                    <p>₹{billingItem.price}</p>
                    <s>₹{billingItem.MRP}</s>
                </div>
            </div>
        )
    }
}

export default BillItemDetail
