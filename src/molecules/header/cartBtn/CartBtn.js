import React, { Component } from 'react';

// component
import CartText from './atoms';

// style
import './cartBtn.scss';

class CartBtn extends Component {
    render() {
        return (
            <button className="cartBtn" >
                <img name="cartImg" id="cartImg" src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-16.jpg"/>
                <CartText {...this.props}></CartText>
            </button>
        )
    }
}

export default CartBtn