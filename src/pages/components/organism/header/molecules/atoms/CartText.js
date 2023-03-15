import React from 'react';

function CartText(props) {
    const { cartStatus } = props;
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

