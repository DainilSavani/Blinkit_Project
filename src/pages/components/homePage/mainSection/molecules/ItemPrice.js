import React from 'react';
import ItemPriceValue from './atoms/ItemPriceValue';
import ItemCartBtns from '../../../atoms/ItemCartBtns';
import './itemPrice.scss';
import { incrementItemInCartHandler } from '../../../atoms/itemCartBtnHelperFunctions';

function ItemPrice(props) {

    const { vegetableItem } = props;
    const loadItemButtons = () => {
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => incrementItemInCartHandler(props)}>ADD</button>
        else
            return <ItemCartBtns {...props} />
    }
    return (
        <div className="price">
            <ItemPriceValue price={vegetableItem.price} mrp={vegetableItem.MRP} />
            {loadItemButtons()}
        </div>
    )
}

export default ItemPrice
