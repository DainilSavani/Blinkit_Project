import React from 'react';
import { useDispatch } from 'react-redux';

function ItemCartBtns(props) {

    const dispatch = useDispatch();
    const { incrementItemInCartHandler, decrementItemInCartHandler, vegetableItem, itemIndex } = props;

    return (
        <div className="billItemBtn">
            <button className='decreaseItem' onClick={() => dispatch(decrementItemInCartHandler(itemIndex))}>-</button>
            <div className='itemValue'>{vegetableItem.count}</div>
            <button className='increaseItem' onClick={() => dispatch(incrementItemInCartHandler(itemIndex))}>+</button>
        </div>
    )
}

export default ItemCartBtns