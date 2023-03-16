import React from 'react';
import OriginalAmount from './atoms/OriginalAmount';
import DiscountAmount from './atoms/DiscountAmount';
import DeliveryAmount from './atoms/DeliveryAmount';
import GrandTotal from './atoms/GrandTotal';
import './billingAmount.scss';

function BillingAmount(props) {
    const { itemsMRP, itemsAmount } = props.cartStatus;
    return (
        <div className='billingAmounts'>
            <OriginalAmount originalAmount={itemsMRP} />
            <DiscountAmount productDiscount={itemsMRP - itemsAmount} />
            <DeliveryAmount />
            <GrandTotal grandTotal={itemsAmount} />
        </div>
    )
}

export default BillingAmount