import React from 'react';
import { incrementItemInCartHandler, decrementItemInCartHandler } from './itemCartBtnHelperFunctions';

function ItemCartBtns(props) {
    const { vegetableItem } = props;
    return (
        <div className="billItemBtn">
            <button className='decreaseItem' onClick={() => decrementItemInCartHandler(props)}>-</button>
            <div className='itemValue'>{vegetableItem.count}</div>
            <button className='increaseItem' onClick={() => incrementItemInCartHandler(props)}>+</button>
        </div>
    )
}

export default ItemCartBtns