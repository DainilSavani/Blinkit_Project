import React, { Component } from 'react';

class BillSectionHeading extends Component {
    render() {
        const {cartItemsCount, clearCartHandler} = this.props;
        return (
            <>
                <header className="billSectionHeading">Place Order</header>
                <div className='billSubHeading'>
                    <div className='delivery'>
                        <h4>Delivery in 10 minutes</h4>
                        <p>{cartItemsCount} items</p>
                    </div>
                    <button className='clearCart' onClick={() => clearCartHandler()}>Clear Cart</button>
                </div>
            </>
        )
    }
}

export default BillSectionHeading
