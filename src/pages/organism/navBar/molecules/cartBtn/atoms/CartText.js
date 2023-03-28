import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartText extends Component {
    render() {
        const { cartDetails } = this.props;
        if (cartDetails.itemsCount === 0) {
            return <div className='cartBtnText'>My Cart</div>
        } else {
            return  <div className='cartBtnText'>
                <p>{cartDetails.itemsCount} items</p>
                <p>₹{cartDetails.itemsDiscountedPrice}</p>
            </div>
        }
    }
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails       
    }
}

export default connect(mapStateToProps)(CartText);