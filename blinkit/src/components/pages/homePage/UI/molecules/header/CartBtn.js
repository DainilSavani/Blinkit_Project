import React, { Component } from 'react';
import Button from '../../atoms/Button';
import CartText from '../../atoms/header/CartText';
import './cartBtn.scss';

class CartBtn extends Component {
    render() {
        return (
            <Button clsName="cartBtn" >
                <img name="cart" id="cartImg" src="/images/cart-image.png" alt=""/>
                <CartText></CartText>
            </Button>
        )
    }
}

export default CartBtn
