import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import BillSectionHeading from './molecules/billingSectionHeading';
import BillingItem from './molecules/billingItem';

// style
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        const { cartDetails } = this.props;
        if (cartDetails.itemsCount)
            return (
                <section className='mainBillSection'>
                    <BillSectionHeading />
                    <BillingItem />
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

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

export default connect(mapStateToProps)(MainBillingSection);