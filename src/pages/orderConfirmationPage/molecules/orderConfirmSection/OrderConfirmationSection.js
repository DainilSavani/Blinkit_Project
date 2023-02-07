import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// helper functions
import clearCartClickHandler from '../../../../helpers/clearShoppingData';

// actions
import { clearItemHandler, clearCartHandler } from '../../../../redux/actions'

// style
import './orderConfirmationSection.scss';

class OrderConfirmationSection extends Component {
    render() {
        const { cartDetails, clearItemHandler, clearCartHandler } = this.props;
        const { itemsDiscountedPrice, itemsOriginalPrice } = cartDetails;
        return (
            <div className='orderConfirmationSection'>
                <i className='fa fa-check-circle'></i>
                <p>Order Placed!!!</p>
                <p>Your order will arrive in 10 minutes.</p>
                <p className='billAmount'>Total amount paid: <b>₹{itemsDiscountedPrice}</b> <s>₹{itemsOriginalPrice}</s></p>
                <p className='totalSavnigs'>Total savings: <b>₹{itemsOriginalPrice - itemsDiscountedPrice}</b></p>
                <Link to='/' className='logoLink'>
                    <button className='orderDetails' onClick={() => clearCartClickHandler(clearItemHandler, clearCartHandler)}>continue shopping</button>
                </Link>
            </div>
        )
    }
}

OrderConfirmationSection.propTypes = {
    cartDetails: PropTypes.object,
    clearItemHandler: PropTypes.func,
    clearCartHandler: PropTypes.func
}
OrderConfirmationSection.defaultProps = {
    cartDetails: {},
    clearItemHandler: () => {},
    clearCartHandler: () => {}
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clearItemHandler: () => dispatch(clearItemHandler()),
        clearCartHandler: () => dispatch(clearCartHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmationSection);