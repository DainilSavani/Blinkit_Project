import React from 'react';
import CartText from './atoms/CartText';
import './cartBtn.scss';

function CartBtn(props) {
    return (
        <button className="cartBtn" >
            <img name="cartImg" id="cartImg" src="/images/cart-image.png" />
            <CartText {...props}></CartText>
        </button>
    )
}

export default CartBtn