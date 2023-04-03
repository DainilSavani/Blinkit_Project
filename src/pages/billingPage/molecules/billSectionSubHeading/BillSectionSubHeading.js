import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// helper function
import clearCartClickHandler from '../../../../helpers/clearShoppingData';

// actions
import { vegetableItemsUpdate, clearCartStateUpdate } from '../../../../redux/actions'

// components
import DeliverySubHeading from './atoms';

class BillSectionSubHeading extends Component {
    render() {
        const { cartItemsCount } = this.props;
        return (
            <div className='billSubHeading'>
                <DeliverySubHeading cartItemsCount={cartItemsCount} />
                <button className='clearCart' onClick={() => clearCartClickHandler({...this.props})}>Clear Cart</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vegetableItems: state.vegetableItems,
        cartItemsCount: state.cartDetails.itemsCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        vegetableItemsUpdate: (itemIndex, vegetableItem, result) => dispatch(vegetableItemsUpdate(itemIndex, vegetableItem, result)),
        clearCartStateUpdate: () => dispatch(clearCartStateUpdate())
    }
}

BillSectionSubHeading.propTypes = {
    cartItemsCount: PropTypes.number,
    vegetableItems: PropTypes.array,
    vegetableItemsUpdate: PropTypes.func,
    clearCartStateUpdate: PropTypes.func
}
BillSectionSubHeading.defaultProps = {
    cartItemsCount: 0,
    vegetableItems: [],
    vegetableItemsUpdate: () => {},
    clearCartStateUpdate: () => {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BillSectionSubHeading);
