import React, { Component } from 'react';

// components
import ItemPriceValue from './atoms';
import ItemCartBtns from '../../../../../molecules/itemCartBtn';

// helper functions
import { incrementItemHandler, incrementCartHandler } from '../../../../../molecules/itemCartBtn/helper/helperFunctions';

// style
import './itemPrice.scss';

class ItemPrice extends Component {

    loadItemButtons = (props) => {
        const { vegetableItem, itemIndex, setState } = props;
        if (vegetableItem.count === 0)
            return (
                <button className='addBtn' onClick={() => {
                    incrementCartHandler(vegetableItem, setState);
                    incrementItemHandler(itemIndex, setState);
                }}>ADD</button>
            )
        else
            return <ItemCartBtns {...props} />
    }
    render() {
        const { vegetableItem } = this.props;
        return (
            <div className="price">
                <ItemPriceValue discountedPrice={vegetableItem.discountedPrice} originalPrice={vegetableItem.originalPrice} />
                {this.loadItemButtons(this.props)}
            </div>
        )
    }
}

export default ItemPrice