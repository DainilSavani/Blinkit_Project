import React, { Component } from 'react';
import { connect } from 'react-redux';

// helper function
import { clearItemHandler, clearCartHandler } from '../../../../../../redux/actions';

// style
import './billSectionHeading.scss';

class BillSectionHeading extends Component {
    render() {
        const { cartItemsCount, clearItemHandler, clearCartHandler } = this.props;
        return (
            <>
                <header className="billSectionHeading">Place Order</header>
                <div className='billSubHeading'>
                    <div className='delivery'>
                        <h4>Delivery in 10 minutes</h4>
                        <p>{cartItemsCount} items</p>
                    </div>
                    <button className='clearCart' onClick={() => {
                        clearItemHandler();
                        clearCartHandler();
                    }}>Clear Cart</button>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItemsCount: state.cartDetails.itemsCount
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearItemHandler: () => dispatch(clearItemHandler()),
        clearCartHandler: () => dispatch(clearCartHandler())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillSectionHeading);