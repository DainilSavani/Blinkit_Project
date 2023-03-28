import React, { Component } from 'react';
import { connect } from 'react-redux';

// component
import ItemCartBtns from '../../../../../../molecules/itemCartBtn';

// helper function
import { removeItemHandler, removeFromCartHandler } from '../../../../../../../redux/actions'

class BillItemBtns extends Component {
    render() {
        const { itemIndex, vegetableItem, removeItemHandler, removeFromCartHandler } = this.props;
        return (
            <div className="billItemBtnSection">
                <ItemCartBtns itemIndex={itemIndex} vegetableItem={vegetableItem} />
                <button className="removeItem" onClick={() => {
                    removeFromCartHandler(itemIndex);
                    removeItemHandler(itemIndex);
                }}>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItemHandler: itemIndex => dispatch(removeItemHandler(itemIndex)),
        removeFromCartHandler: itemIndex => dispatch(removeFromCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(BillItemBtns);
