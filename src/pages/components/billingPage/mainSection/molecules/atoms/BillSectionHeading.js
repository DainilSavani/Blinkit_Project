import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartHandler } from '../../../../../../redux/actions';

function BillSectionHeading() {

    const {itemsCount} = useSelector(state => state.cartStatus);
    const dispatch = useDispatch();

    return (
        <>
            <header className="billSectionHeading">Place Order</header>
            <div className='billSubHeading'>
                <div className='delivery'>
                    <h4>Delivery in 10 minutes</h4>
                    <p>{itemsCount} items</p>
                </div>
                <button className='clearCart' onClick={() => dispatch(clearCartHandler())}>Clear Cart</button>
            </div>
        </>
    )
}

export default BillSectionHeading
