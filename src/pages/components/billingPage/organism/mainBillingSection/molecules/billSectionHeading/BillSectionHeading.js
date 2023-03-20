import React, { Component } from 'react';

// helper function
import { clearItemHandler, clearCartHandler } from '../helper/helperFunctions';

// style
import './billSectionHeading.scss';

class BillSectionHeading extends Component {
    render() {
        const { cartItemsCount, setState } = this.props;
        return (
            <>
                <header className="billSectionHeading">Place Order</header>
                <div className='billSubHeading'>
                    <div className='delivery'>
                        <h4>Delivery in 10 minutes</h4>
                        <p>{cartItemsCount} items</p>
                    </div>
                    <button className='clearCart' onClick={() => {
                        clearItemHandler(setState);
                        clearCartHandler(setState);
                    }}>Clear Cart</button>
                </div>
            </>
        )
    }
}

export default BillSectionHeading;