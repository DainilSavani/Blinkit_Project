import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// component
import ItemCartBtns from '../../../../molecules/itemCartBtn';

// helper function
import removeItemClickHandler from './helpers/billItemBtns.general';

// actions
import { removeItemHandler, removeFromCartHandler } from '../../../../redux/actions'

// style
import './billItemBtns.scss';

class BillItemBtns extends Component {
    render() {
        const { vegetableItem, itemIndex, removeItemHandler, removeFromCartHandler } = this.props;
        return (
            <div className="billItemBtnSection">
                <ItemCartBtns itemIndex={itemIndex} vegetableItem={vegetableItem} />
                <button className="removeItem" onClick={() => removeItemClickHandler(itemIndex, removeItemHandler, removeFromCartHandler)}>Remove</button>
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