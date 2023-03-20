import React, { Component } from 'react';

// component
import CartText from './atoms';

// style
import './cartBtn.scss';

class CartBtn extends Component {
    render() {
        const { cartDetails } = this.props;
        return (
            <button className="cartBtn" >
                <img name="cartImg" id="cartImg" src="/images/cart-image.png"/>
                <CartText cartDetails={cartDetails}></CartText>
            </button>
        )
    }
}

export default CartBtn
