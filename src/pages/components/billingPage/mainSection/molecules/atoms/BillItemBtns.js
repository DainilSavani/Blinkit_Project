import React from 'react';
import ItemCartBtns from '../../../../atoms/ItemCartBtns';
import { removeItemFromCartHandler } from '../../../../atoms/itemCartBtnHelperFunctions';

function BillItemBtns(props) {
    return (
        <div className="billItemBtnSection">
            <ItemCartBtns {...props} />
            <button className="removeItem" onClick={() => removeItemFromCartHandler(props)}>Remove</button>
        </div>
    )
}

export default BillItemBtns