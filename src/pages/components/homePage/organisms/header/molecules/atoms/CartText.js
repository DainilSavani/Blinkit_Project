import React, { Component } from 'react';

class CartText extends Component {
    render() {
        const {cartStatus} = this.props;
        if (cartStatus.itemsCount === 0) {
            return <div className='cartBtnText'>My Cart</div>
        } else {
            return  <div className='cartBtnText'>
                <p>{cartStatus.itemsCount} items</p>
                <p>₹{cartStatus.itemsAmount}</p>
            </div>
        }
    }
}

export default CartText
