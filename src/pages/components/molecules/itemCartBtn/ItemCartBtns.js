import React, { Component } from 'react';

// helper function
import { incrementItemHandler, incrementCartHandler, decrementItemHandler, decrementCartHandler } 
    from './helper/helperFunctions';

class ItemCartBtns extends Component {
    render() {
        const { itemIndex, vegetableItem, setState } = this.props;
        return (
            <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => { 
                    decrementItemHandler(itemIndex, setState); 
                    decrementCartHandler(vegetableItem, setState); 
                }}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => { 
                    incrementItemHandler(itemIndex, setState); 
                    incrementCartHandler(vegetableItem, setState); 
                }}>+</button>
            </div>
        )
    }
}

export default ItemCartBtns
