import React, { Component } from 'react';
import ItemPriceValue from './atoms/ItemPriceValue';
import ItemCartBtns from '../../../../atoms/ItemCartBtns';
import './itemPrice.scss';

class ItemPrice extends Component {

    loadItemButtons = (props) => {
        const { vegetableItem, itemIndex, addToCartHandler } = props;
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => addToCartHandler(itemIndex)}>ADD</button>
        else
            return <ItemCartBtns {...props} />

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
