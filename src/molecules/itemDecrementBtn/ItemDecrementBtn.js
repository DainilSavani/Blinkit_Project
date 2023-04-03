import React, { Component } from 'react';
import { connect } from 'react-redux';

// helper functions
import decrementClickHandler from './helpers/decrementItemHandler';

// actions
import { vegetableItemsUpdate, itemsCartUpdate } from "../../redux/actions";

class ItemDecrementBtn extends Component {
    render() {
        return (
            <button className='decreaseItem' onClick={() => decrementClickHandler({ ...this.props })}>-</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        vegetableItemsUpdate: (itemIndex, vegetableItem, result) => dispatch(vegetableItemsUpdate(itemIndex, vegetableItem, result)),
        itemsCartUpdate: (itemIndex, result, isIncrement) => dispatch(itemsCartUpdate(itemIndex, result, isIncrement))
    }
}

export default connect(null, mapDispatchToProps)(ItemDecrementBtn);