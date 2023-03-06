import React, { Component } from 'react';
import ItemPriceValue from './atoms/ItemPriceValue';
import './itemPrice.scss';

class ItemPrice extends Component {

    loadItemButtons = ({ vegetableItem, itemIndex, addToCartHandler, removeFromCartHandler }) => {
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => addToCartHandler(itemIndex)}>ADD</button>
        else
            return <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => removeFromCartHandler(itemIndex)}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => addToCartHandler(itemIndex)}>+</button>
            </div>

    }
    render() {
        const { vegetableItem } = this.props;
        return (
            <div className="price">
                <ItemPriceValue price={vegetableItem.price} mrp={vegetableItem.MRP} />
                {this.loadItemButtons(this.props)}
            </div>
        )
    }
}

export default ItemPrice
