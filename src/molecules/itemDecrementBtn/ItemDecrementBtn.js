import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// helper functions
import decrementClickHandler from './helpers/decrementItemHandler';

// actions
import { decrementItemHandler, decrementCartHandler } from "../../redux/actions";

class ItemDecrementBtn extends Component {
    render() {
        return (
            <button className='decreaseItem' onClick={() => decrementClickHandler({...this.props})}>-</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrementItemHandler: itemIndex => dispatch(decrementItemHandler(itemIndex)),
        decrementCartHandler: itemIndex => dispatch(decrementCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemDecrementBtn);