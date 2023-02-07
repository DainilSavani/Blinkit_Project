import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// helper function
import clearCartClickHandler from './helpers/BillSectionHeading.general';

// actions
import { clearItemHandler, clearCartHandler } from '../../../../redux/actions'

// components
import DeliverySubHeading from './atoms';

class BillSectionSubHeading extends Component {
    render() {
        const { cartItemsCount, clearItemHandler, clearCartHandler } = this.props;
        return (
            <div className='billSubHeading'>
                <DeliverySubHeading cartItemsCount={cartItemsCount} />
                <button className='clearCart' onClick={() => clearCartClickHandler(clearItemHandler, clearCartHandler)}>Clear Cart</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItemsCount: state.cartDetails.itemsCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearItemHandler: () => dispatch(clearItemHandler()),
        clearCartHandler: () => dispatch(clearCartHandler())
    }
}

BillSectionSubHeading.propTypes = {
    cartItemsCount: PropTypes.number,
    clearItemHandler: PropTypes.func,
    clearCartHandler: PropTypes.func
}
BillSectionSubHeading.defaultProps = {
    cartItemsCount: 0,
    clearItemHandler: () => {},
    clearCartHandler: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BillSectionSubHeading);
