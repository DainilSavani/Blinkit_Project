import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

export default connect(mapStateToProps)(CartBtn);