import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProceedItems extends Component {
    render() {
        const { itemsCount, itemsMRP, itemsAmount } = this.props.cartStatus;
        return (
            <div className="proceedItems">
                <p>{itemsCount}</p>
                <p>items</p>
                <p>:</p>
                <p>₹{itemsAmount}</p>
                <s>₹{itemsMRP}</s>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartStatus: state.cartStatus
    }
}

export default connect(mapStateToProps)(ProceedItems);
