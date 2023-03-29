import React, { Component } from 'react';

// helper functions
import decrementClickHandler from './helpers/decrementItemHandler';

class ItemDecrementBtn extends Component {
    render() {
        return (
            <button className='decreaseItem' onClick={() => decrementClickHandler({...this.props})}>-</button>
        )
    }
}

export default ItemDecrementBtn