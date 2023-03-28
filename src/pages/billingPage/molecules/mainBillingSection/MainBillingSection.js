import React, { Component } from 'react';

// components
import BillSectionHeading from '../billSectionHeading';
import BillingItem from '../billingItem';
import EmptyCartSection from './atoms'

// style
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        const { cartDetails, appSetState } = this.props;
        const { itemsCount } = cartDetails;
        return (itemsCount)
            ? <section className='mainBillSection'>
                <BillSectionHeading cartItemsCount={itemsCount} appSetState={appSetState} />
                <BillingItem {...this.props} />
            </section>
            : <EmptyCartSection />
    }
}

export default MainBillingSection
