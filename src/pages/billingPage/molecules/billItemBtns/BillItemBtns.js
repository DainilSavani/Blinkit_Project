import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// component
import ItemCartBtns from '../../../../molecules/itemCartBtn';

// helper function
import removeItemClickHandler from './helpers/billItemBtns.general';

// actions
import { vegetableItemsUpdate, itemsCartUpdate } from '../../../../redux/actions'

// style
import './billItemBtns.scss';

class BillItemBtns extends Component {
    render() {
        return (
            <div className="billItemBtnSection">
                <ItemCartBtns {...this.props} />
                <button className="removeItem" onClick={() => removeItemClickHandler({...this.props})}>Remove</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        vegetableItemsUpdate: (itemIndex, vegetableItem, result) => dispatch(vegetableItemsUpdate(itemIndex, vegetableItem, result)),
        itemsCartUpdate: (itemIndex, result, isIncrement) => dispatch(itemsCartUpdate(itemIndex, result, isIncrement))
    }
}

export default connect(null, mapDispatchToProps)(BillItemBtns);