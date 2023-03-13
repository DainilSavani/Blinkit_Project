import React, { Component } from 'react';
import ItemCartBtns from '../../../../atoms/ItemCartBtns';

class BillItemBtns extends Component {
    loadItemButtons = (props) => {
        return <ItemCartBtns {...props} />

    }
    render() {
        const {removeItemFromCartHandler, itemIndex, vegetableItem} = this.props;
        return (
            <div className="billItemBtnSection">
                {this.loadItemButtons(this.props)}
                <button className="removeItem" onClick={() => removeItemFromCartHandler(itemIndex)}>Remove</button>
            </div>
        )
    }
}

export default BillItemBtns
