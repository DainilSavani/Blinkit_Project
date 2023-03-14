import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementItemInCartHandler, decrementItemInCartHandler } from '../../../redux/actions';

function ItemCartBtns(props) {

    const { vegetableItem, itemIndex } = props;
    const dispatch = useDispatch()

    return (
        <div className="billItemBtn">
            <button className='decreaseItem' onClick={() => dispatch(decrementItemInCartHandler(itemIndex))}>-</button>
            <div className='itemValue'>{vegetableItem.count}</div>
            <button className='increaseItem' onClick={() => dispatch(incrementItemInCartHandler(itemIndex))}>+</button>
        </div>
    )
}

export default ItemCartBtns