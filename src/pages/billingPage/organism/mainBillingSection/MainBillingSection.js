import React, { Component } from 'react';

// components
import BillSectionHeading from './molecules/billSectionHeading';
import BillingItem from './molecules/billingItem';

// style
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        const { cartDetails, setState } = this.props;
        if (cartDetails.itemsCount)
            return (
                <section className='mainBillSection'>
                    <BillSectionHeading cartItemsCount={cartDetails.itemsCount} setState={setState} />
                    <BillingItem {...this.props} />
                </section>
            )
        else
            return (
                <section className='emptyCartMainSection'>
                    <img id='emptyCart' name='emptyCart' src='./images/empty_cart.webp' />
                    <h3 className='emptyCartDisc'>You don't have any items in your cart</h3>
                    <p className='emptyCartDisc'>Your favourite items are just a click away</p>
                    <button className='emptyCartBtn'>Start Shopping</button>
                </section>
            )
    }
}

export default MainBillingSection
