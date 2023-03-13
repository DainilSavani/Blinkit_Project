import React, { Component } from 'react'

class ItemCartBtns extends Component {
    render() {
        const {addToCartHandler, removeFromCartHandler, itemIndex, vegetableItem} = this.props;
        return (
            <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => removeFromCartHandler(itemIndex)}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => addToCartHandler(itemIndex)}>+</button>
            </div>
        )
    }
}

export default ItemCartBtns
