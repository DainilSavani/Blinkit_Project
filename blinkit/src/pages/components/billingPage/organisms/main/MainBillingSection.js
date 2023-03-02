import React, { Component } from 'react';
import BillSectionHeading from '../../atoms/main/BillSectionHeading';
import BillingItem from '../../molecules/main/BillingItem';
import BillingAmount from '../../molecules/payment/BillingAmount';
import ProceedPayment from '../../molecules/payment/ProceedPayment';
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        const { cartStatus, clearCartHandler } = this.props;
        return (
            <section className='mainBillSection'>
                <BillSectionHeading cartItemsCount={cartStatus.itemsCount} clearCartHandler={clearCartHandler} />
                <BillingItem {...this.props} />
                <BillingAmount cartStatus={cartStatus} />
                <ProceedPayment cartStatus={cartStatus} />
            </section>
        )
    }
}

export default MainBillingSection
