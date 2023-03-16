import React from 'react';

//for reseting products count on clear cart
import VEGETABLE_ITEMS from '../../../../../../data/vegetableData.json';
import { CART_STATUS } from '../../../../../../data/constData';

function BillSectionHeading(props) {
    const { cartItemsCount, setVegetableItems, setCartStatus } = props;
    const clearCartHandler = () => {
        setVegetableItems(structuredClone(VEGETABLE_ITEMS));
        setCartStatus(CART_STATUS);
    }
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

export default BillSectionHeading
