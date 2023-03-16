import React from 'react';

function BillItemDetail(props) {
    const { vegetableItem } = props;
        const vegetableItemWeight = vegetableItem.weight >= 1 ? vegetableItem.weight + "kg" : (vegetableItem.weight * 1000) + "g";
    return (
        <div className='billItemDetail'>
            <div className="billItemName">{vegetableItem.name}</div>
            <div className="billItemWeight">{vegetableItemWeight}</div>
            <div className="billItemPrice">
                <p>₹{vegetableItem.price}</p>
                <s>₹{vegetableItem.MRP}</s>
            </div>
        </div>
    )
}

export default BillItemDetail