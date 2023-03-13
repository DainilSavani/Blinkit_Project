import React, { Component } from 'react';
import ItemPriceValue from './atoms/ItemPriceValue';
import ItemCartBtns from '../../../atoms/ItemCartBtns';
import { connect } from 'react-redux';
import { incrementItemInCartHandler, decrementItemInCartHandler } from '../../../../../redux/actions';
import './itemPrice.scss';

class ItemPrice extends Component {

    loadItemButtons = (props) => {
        const { vegetableItem, itemIndex, incrementItemInCartHandler, decrementItemInCartHandler } = props;
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => incrementItemInCartHandler(itemIndex)}>ADD</button>
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

const mapDispatchToProps = dispatch => {
    return {
        incrementItemInCartHandler: itemIndex => dispatch(incrementItemInCartHandler(itemIndex)),
        decrementItemInCartHandler: itemIndex => dispatch(decrementItemInCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemPrice);
