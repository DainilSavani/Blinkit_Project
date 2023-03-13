import React, { Component } from 'react';
import CartText from './atoms/CartText';
import './cartBtn.scss';

class CartBtn extends Component {
    render() {
        const {cartStatus} = this.props;
        return (
            <button className="cartBtn" >
                <img name="cartImg" id="cartImg" src="/images/cart-image.png"/>
                <CartText cartStatus={cartStatus}></CartText>
            </button>
        )
    }
}

export default CartBtn
