import React from 'react';
import { useSelector } from 'react-redux';

function CartText() {

    const cartStatus = useSelector(state => state.cartStatus);

    if (cartStatus.itemsCount === 0) {
        return <div className='cartBtnText'>My Cart</div>
    } else {
        return <div className='cartBtnText'>
            <p>{cartStatus.itemsCount} items</p>
            <p>₹{cartStatus.itemsAmount}</p>
        </div>
    }
}

export default CartText
