import React, { Component } from 'react';
import { BillSectionHeading } from './molecules/atoms/BillSectionHeading';
import BillingItem from './molecules/BillingItem';
import BillingAmount from './molecules/BillingAmount';
import ProceedPayment from './molecules/ProceedPayment';
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        const { cartStatus } = this.props.state;
        const {clearCartHandler} = this.props;
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
