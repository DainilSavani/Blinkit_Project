import React, { Component } from 'react';
import { PropTypes } from "prop-types";

// constants
import CART_DETAILS from '../../../../constants/cartDetailsConstant';

class CartText extends Component {
    render() {
        const { itemsCount, itemsDiscountedPrice } = this.props;
        return (itemsCount)
            ? <div className='cartBtnText'>
                <p>{itemsCount} items</p>
                <p>₹{itemsDiscountedPrice}</p>
            </div>
            : <div className='cartBtnText'>My Cart</div>
    }
}

CartText.propTypes = {
    cartDetails: PropTypes.object
}
CartText.defaultProps = {
    cartDetails: CART_DETAILS
}

export default CartText