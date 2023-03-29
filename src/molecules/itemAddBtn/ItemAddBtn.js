import React, { Component } from 'react';

// helper functions
import incrementClickHandler from '../helpers/incrementItemHandler';

// style
import './itemAddBtn.scss';

class ItemAddBtn extends Component {
    render() {
        return (
            <button className='addBtn' onClick={() => incrementClickHandler({...this.props})}>ADD</button>
        )
    }
}

export default ItemAddBtn