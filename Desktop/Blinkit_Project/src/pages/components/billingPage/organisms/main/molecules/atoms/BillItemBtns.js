import React, { Component } from 'react';

class BillItemBtns extends Component {
    loadItemButtons = ({ billingItem, itemIndex, addItemsToCartHandler, decreaseItemsFromCartHandler }) => {
        return <div className="billItemAddBtn">
            <button className='decreaseItem' onClick={() => decreaseItemsFromCartHandler(itemIndex)}>-</button>
            <div className='itemValue'>{billingItem.count}</div>
            <button className='increaseItem' onClick={() => addItemsToCartHandler(itemIndex)}>+</button>
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

export default BillItemBtns
