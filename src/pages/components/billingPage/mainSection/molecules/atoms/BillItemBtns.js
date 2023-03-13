import React, { Component } from 'react';
import ItemCartBtns from '../../../../atoms/ItemCartBtns';
import { connect } from 'react-redux';
import { incrementItemInCartHandler, decrementItemInCartHandler, removeItemFromCartHandler } from '../../../../../../redux/actions';

class BillItemBtns extends Component {
    loadItemButtons = (props) => {
        return <ItemCartBtns {...props} />

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

const mapDispatchToProps = dispatch => {
    return {
        incrementItemInCartHandler: itemIndex => dispatch(incrementItemInCartHandler(itemIndex)),
        decrementItemInCartHandler: itemIndex => dispatch(decrementItemInCartHandler(itemIndex)),
        removeItemFromCartHandler: itemIndex => dispatch(removeItemFromCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(BillItemBtns);
