import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// helper functions
import incrementClickHandler from '../helpers/incrementItemHandler';

// actions
import { incrementItemHandler, incrementCartHandler } from "../../redux/actions";

class ItemIncrementBtn extends Component {
    render() {
        return (
            <button className='increaseItem' onClick={() => incrementClickHandler({...this.props})}>+</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementItemHandler: itemIndex => dispatch(incrementItemHandler(itemIndex)),
        incrementCartHandler: itemIndex => dispatch(incrementCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemIncrementBtn);
