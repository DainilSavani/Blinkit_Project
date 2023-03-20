import React, { Component } from 'react';

class CartText extends Component {
    render() {
        const { cartDetails } = this.props;
        if ( cartDetails.itemsCount === 0 ) {
            return <div className='cartBtnText'>My Cart</div>
        } else {
            return  <div className='cartBtnText'>
                <p>{cartDetails.itemsCount} items</p>
                <p>₹{cartDetails.itemsDiscountedPrice}</p>
            </div>
        }
    }
}

export default CartText
