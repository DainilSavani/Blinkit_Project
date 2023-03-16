import React from 'react';
import BillSectionHeading from './molecules/atoms/BillSectionHeading';
import BillingItem from './molecules/BillingItem';
import BillingAmount from './molecules/BillingAmount';
import ProceedPayment from './molecules/ProceedPayment';
import './MainBillingSection.scss';

function MainBillingSection(props) {
    const { cartStatus, clearCartHandler } = props;
    return (
        <section className='mainBillSection'>
            <BillSectionHeading {...props}/>
            <BillingItem {...props} />
            <BillingAmount cartStatus={cartStatus} />
            <ProceedPayment cartStatus={cartStatus} />
        </section>
    )
}

export default MainBillingSection
