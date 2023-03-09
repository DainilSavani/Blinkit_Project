import React, { Component } from 'react';
import ItemPriceValue from './atoms/ItemPriceValue';
import { connect } from 'react-redux';
import { incrementItemInCartHandler, decrementItemInCartHandler } from '../../../../../../redux/actions';
import './itemPrice.scss';

class ItemPrice extends Component {

    loadItemButtons = ({ vegetableItem, itemIndex, incrementItemInCartHandler, decrementItemInCartHandler }) => {
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => incrementItemInCartHandler(itemIndex)}>ADD</button>
        else
            return <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => decrementItemInCartHandler(itemIndex)}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => incrementItemInCartHandler(itemIndex)}>+</button>
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

const mapDispatchToProps = dispatch => {
    return {
        incrementItemInCartHandler: itemIndex => dispatch(incrementItemInCartHandler(itemIndex)),
        decrementItemInCartHandler: itemIndex => dispatch(decrementItemInCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemPrice);
