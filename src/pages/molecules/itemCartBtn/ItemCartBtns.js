import React, { Component } from 'react';
import { connect } from 'react-redux';

// actions
import { incrementItemHandler, incrementCartHandler, decrementItemHandler, decrementCartHandler } from '../../../redux/actions';

class ItemCartBtns extends Component {
    render() {
        const { 
            itemIndex, vegetableItem, incrementItemHandler, incrementCartHandler, decrementItemHandler, decrementCartHandler
        } = this.props;
        return (
            <div className="billItemBtn">
                <button className='decreaseItem' onClick={() => { 
                    decrementItemHandler(itemIndex); 
                    decrementCartHandler(itemIndex); 
                }}>-</button>
                <div className='itemValue'>{vegetableItem.count}</div>
                <button className='increaseItem' onClick={() => { 
                    incrementItemHandler(itemIndex); 
                    incrementCartHandler(itemIndex); 
                }}>+</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        incrementItemHandler: (itemIndex) => dispatch(incrementItemHandler(itemIndex)),
        incrementCartHandler: (itemIndex) => dispatch(incrementCartHandler(itemIndex)),
        decrementItemHandler: (itemIndex) => dispatch(decrementItemHandler(itemIndex)),
        decrementCartHandler: (itemIndex) => dispatch(decrementCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemCartBtns);