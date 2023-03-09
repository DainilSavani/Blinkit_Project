import React, { Component } from 'react';
import BillSectionHeading from './molecules/atoms/BillSectionHeading';
import BillingItem from './molecules/BillingItem';
import BillingAmount from './molecules/BillingAmount';
import ProceedPayment from './molecules/ProceedPayment';
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        return (
            <section className='mainBillSection'>
                <BillSectionHeading />
                <BillingItem />
                <BillingAmount />
                <ProceedPayment />
            </section>
        )
    }
}

export default MainBillingSection
