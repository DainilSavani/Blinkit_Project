import React, { Component } from 'react'

class ItemCartBtns extends Component {
    render() {
        const { incrementItemHandler, incrementCartHandler, decrementItemHandler, decrementCartHandler, itemIndex, vegetableItem} = this.props;
        return (
            <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => { 
                    decrementItemHandler(itemIndex); 
                    decrementCartHandler(vegetableItem); 
                }}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => { 
                    incrementItemHandler(itemIndex); 
                    incrementCartHandler(vegetableItem); 
                }}>+</button>
            </div>
        )
    }
}

export default ItemCartBtns
