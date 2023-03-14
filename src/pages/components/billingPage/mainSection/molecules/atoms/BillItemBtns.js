import React from 'react';
import ItemCartBtns from '../../../../atoms/ItemCartBtns';
import { useDispatch } from 'react-redux';
import { removeItemFromCartHandler } from '../../../../../../redux/actions';

function BillItemBtns(props) {

    const dispatch = useDispatch();
    const {itemIndex} = props;

    return (
        <div className="billItemButtons">
            <ItemCartBtns {...props} />
            <button className="removeItem" onClick={() => dispatch(removeItemFromCartHandler(itemIndex))}>Remove</button>
        </div>
    )
}

export default BillItemBtns
