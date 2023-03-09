import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementItemInCartHandler, decrementItemInCartHandler, removeItemFromCartHandler } from '../../../../../../../redux/actions';

class BillItemBtns extends Component {
    loadItemButtons = ({ billingItem, itemIndex, incrementItemInCartHandler, decrementItemInCartHandler }) => {
        return <div className="billItemAddBtn">
            <button className='decreaseItem' onClick={() => decrementItemInCartHandler(itemIndex)}>-</button>
            <div className='itemValue'>{billingItem.count}</div>
            <button className='increaseItem' onClick={() => incrementItemInCartHandler(itemIndex)}>+</button>
        </div>

    }
    render() {
        const {removeItemFromCartHandler, itemIndex} = this.props;
        return (
            <div className="billItemButtons">
                {this.loadItemButtons(this.props)}
                <button className="removeItem" onClick={() => removeItemFromCartHandler(itemIndex)}>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementItemInCartHandler: itemIndex => dispatch(incrementItemInCartHandler(itemIndex)),
        decrementItemInCartHandler: itemIndex => dispatch(decrementItemInCartHandler(itemIndex)),
        removeItemFromCartHandler: itemIndex => dispatch(removeItemFromCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(BillItemBtns);
