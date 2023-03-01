import React, { Component } from 'react';
import Button from '../../atoms/Button';
import CartText from '../../atoms/header/CartText';
import './cartBtn.scss';

class CartBtn extends Component {
    render() {
        const {cartStatus} = this.props;
        return (
            <Button clsName="cartBtn" >
                <img name="cartImg" id="cartImg" src="/images/cart-image.png"/>
                <CartText cartStatus={cartStatus}></CartText>
            </Button>
        )
    }
}

export default CartBtn
