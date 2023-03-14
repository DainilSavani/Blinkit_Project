import React from 'react';
import ItemPriceValue from './atoms/ItemPriceValue';
import ItemCartBtns from '../../../atoms/ItemCartBtns';
import { useDispatch } from 'react-redux';
import { incrementItemInCartHandler, decrementItemInCartHandler } from '../../../../../redux/actions';
import './itemPrice.scss';

function ItemPrice(props) {

    const {vegetableItem} = props;
    const dispatch = useDispatch();
    
    const loadItemButtons = (props)  => {
        const {vegetableItem, itemIndex, incrementItemInCartHandler} = props;
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => dispatch(incrementItemInCartHandler(itemIndex))}>ADD</button>
        else
            return <ItemCartBtns {...props} />

    }

    return (
        <div className="price">
            <ItemPriceValue price={vegetableItem.price} mrp={vegetableItem.MRP} />
            {loadItemButtons({...props, incrementItemInCartHandler, decrementItemInCartHandler})}
        </div>
    )
}

export default ItemPrice