import React, { Component } from 'react'

class ItemCartBtns extends Component {
    render() {
        const {incrementItemInCartHandler, decrementItemInCartHandler, itemIndex, vegetableItem} = this.props;
        return (
            <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => decrementItemInCartHandler(itemIndex)}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => incrementItemInCartHandler(itemIndex)}>+</button>
            </div>
        )
    }
}

export default ItemCartBtns
