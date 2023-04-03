import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// helper functions
import incrementClickHandler from '../helpers/incrementItemHandler';

// actions
import { vegetableItemsUpdate, itemsCartUpdate } from "../../redux/actions";

// style
import './itemAddBtn.scss';

class ItemAddBtn extends Component {
    render() {
        return (
            <button className='addBtn' onClick={() => incrementClickHandler({...this.props})}>ADD</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        vegetableItemsUpdate: (itemIndex, vegetableItem, result) => dispatch(vegetableItemsUpdate(itemIndex, vegetableItem, result)),
        itemsCartUpdate: (itemIndex, result, isIncrement) => dispatch(itemsCartUpdate(itemIndex, result, isIncrement))
    }
}

export default connect(null, mapDispatchToProps)(ItemAddBtn);