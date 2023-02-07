import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// component
import CartText from './atoms';

// style
import './cartBtn.scss';

class CartBtn extends Component {
    render() {
        const { cartDetails } = this.props;
        return (
            <button className="cartBtn" >
                <img name="cartImg" id="cartImg" src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-16.jpg"/>
                <CartText {...cartDetails}></CartText>
            </button>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

CartBtn.propTypes = {
    cartDetails: PropTypes.object
}
CartBtn.defaultProps = {
    cartDetails: {}
}

export default connect(mapStateToProps)(CartBtn);