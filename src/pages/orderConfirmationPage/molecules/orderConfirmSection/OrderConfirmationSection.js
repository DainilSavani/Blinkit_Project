import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// helper functions
import clearCartClickHandler from '../../../../helpers/clearShoppingData';

// actions
import { vegetableItemsUpdate, clearCartStateUpdate } from '../../../../redux/actions'

// style
import './orderConfirmationSection.scss';

class OrderConfirmationSection extends Component {
    render() {
        const { cartDetails } = this.props;
        const { itemsDiscountedPrice, itemsOriginalPrice } = cartDetails;
        return (
            <div className='orderConfirmationSection'>
                <i className='fa fa-check-circle'></i>
                <p>Order Placed!!!</p>
                <p>Your order will arrive in 10 minutes.</p>
                <p className='billAmount'>Total amount paid: <b>₹{itemsDiscountedPrice}</b> <s>₹{itemsOriginalPrice}</s></p>
                <p className='totalSavnigs'>Total savings: <b>₹{itemsOriginalPrice - itemsDiscountedPrice}</b></p>
                <Link to='/' className='logoLink'>
                    <button className='orderDetails' onClick={() => clearCartClickHandler({...this.props})}>continue shopping</button>
                </Link>
            </div>
        )
    }
}

OrderConfirmationSection.propTypes = {
    cartDetails: PropTypes.object,
    vegetableItems: PropTypes.array,
    vegetableItemsUpdate: PropTypes.func,
    clearCartStateUpdate: PropTypes.func
}
OrderConfirmationSection.defaultProps = {
    cartDetails: {},
    vegetableItems: [],
    vegetableItemsUpdate: () => {},
    clearCartStateUpdate: () => {}
}

const mapStateToProps = state => {
    return {
        vegetableItems: state.vegetableItems,
        cartDetails: state.cartDetails
    }
}
const mapDispatchToProps = dispatch => {
    return {
        vegetableItemsUpdate: (itemIndex, vegetableItem, result) => dispatch(vegetableItemsUpdate(itemIndex, vegetableItem, result)),
        clearCartStateUpdate: () => dispatch(clearCartStateUpdate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmationSection);