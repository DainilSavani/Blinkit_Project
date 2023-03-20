import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// components
import ItemPriceValue from './atoms';
import ItemCartBtns from '../../../../../molecules/itemCartBtn';

// helper functions
import { incrementItemHandler, incrementCartHandler } from '../../../../../../redux/actions';

// style
import './itemPrice.scss';

class ItemPrice extends Component {

    loadItemButtons = (props) => {
        const { vegetableItem, itemIndex, incrementItemHandler, incrementCartHandler } = props;
        if (vegetableItem.count === 0)
            return <button className='addBtn' onClick={() => {
                incrementItemHandler(itemIndex);
                incrementCartHandler(itemIndex);
            }}>ADD</button>
        else
            return <ItemCartBtns {...props} />

    }
    render() {
        const { vegetableItem } = this.props;
        return (
            <div className="price">
                <ItemPriceValue 
                    discountedPrice={vegetableItem.discountedPrice}
                    originalPrice={vegetableItem.originalPrice} 
                />
                {this.loadItemButtons(this.props)}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementItemHandler: itemIndex => dispatch(incrementItemHandler(itemIndex)),
        incrementCartHandler: itemIndex => dispatch(incrementCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemPrice);