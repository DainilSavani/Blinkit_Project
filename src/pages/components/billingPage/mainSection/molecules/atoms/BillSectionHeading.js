import React, { Component } from 'react';

//for reseting products count on clear cart
import VEGETABLE_ITEMS from '../../../../../../data/vegetableData.json';
import { CART_STATUS } from '../../../../../../data/constData';

export const clearCartHandler = function clearCartHandler() {
    this.setState({
        vegetableItems: [...VEGETABLE_ITEMS],
        cartStatus: {...CART_STATUS}
    });
}

export class BillSectionHeading extends Component {
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
