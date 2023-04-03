import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// helper functions
import incrementClickHandler from '../helpers/incrementItemHandler';

// actions
import { vegetableItemsUpdate, itemsCartUpdate } from "../../redux/actions";

class ItemIncrementBtn extends Component {
    render() {
        return (
            <button className='increaseItem' onClick={() => incrementClickHandler({...this.props})}>+</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        vegetableItemsUpdate: (itemIndex, vegetableItem, result) => dispatch(vegetableItemsUpdate(itemIndex, vegetableItem, result)),
        itemsCartUpdate: (itemIndex, result, isIncrement) => dispatch(itemsCartUpdate(itemIndex, result, isIncrement))
    }
}

export default connect(null, mapDispatchToProps)(ItemIncrementBtn);