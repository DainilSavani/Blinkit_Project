import React, { Component } from 'react';
import { connect } from 'react-redux'; 

// helper functions
import incrementClickHandler from '../helpers/incrementItemHandler';

// actions
import { incrementItemHandler, incrementCartHandler } from "../../redux/actions";

// style
import './itemAddBtn.scss';

class ItemAddBtn extends Component {
    render() {
        return (
            <button className='addBtn' onClick={() => incrementClickHandler({...this.props})}>ADD</button>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementItemHandler: itemIndex => dispatch(incrementItemHandler(itemIndex)),
        incrementCartHandler: itemIndex => dispatch(incrementCartHandler(itemIndex))
    }
}

export default connect(null, mapDispatchToProps)(ItemAddBtn);
