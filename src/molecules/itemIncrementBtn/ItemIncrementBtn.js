import React, { Component } from 'react';

// helper functions
import incrementClickHandler from '../helpers/incrementItemHandler';

class ItemIncrementBtn extends Component {
    render() {
        return (
            <button className='increaseItem' onClick={() => incrementClickHandler({...this.props})}>+</button>
        )
    }
}

export default ItemIncrementBtn