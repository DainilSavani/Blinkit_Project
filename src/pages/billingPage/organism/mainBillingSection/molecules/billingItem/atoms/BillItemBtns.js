import React, { Component } from 'react';

// component
import ItemCartBtns from '../../../../../../molecules/itemCartBtn';

// helper function
import { removeItemHandler, removeFromCartHandler } from '../../../../../../molecules/itemCartBtn/helper/helperFunctions'

class BillItemBtns extends Component {
    render() {
        const { itemIndex, setState, vegetableItem } = this.props;
        return (
            <div className="billItemBtnSection">
                <ItemCartBtns {...this.props} />
                <button className="removeItem" onClick={() => {
                    removeFromCartHandler(vegetableItem, setState);
                    removeItemHandler(itemIndex, setState);
                }}>Remove</button>
            </div>
        )
    }
}

export default BillItemBtns
