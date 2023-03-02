import React, { Component } from 'react';
import OriginalAmount from '../../atoms/payment/OriginalAmount';
import DiscountAmount from '../../atoms/payment/DiscountAmount';
import DeliveryAmount from '../../atoms/payment/DeliveryAmount';
import GrandTotal from '../../atoms/payment/GrandTotal';
import './billingAmount.scss';

class BillingAmount extends Component {
    render() {
        const {itemsMRP, itemsAmount} = this.props.cartStatus;
        return (
            <div className='billingAmounts'>
                <OriginalAmount originalAmount={itemsMRP} />
                <DiscountAmount productDiscount={itemsMRP - itemsAmount} />
                <DeliveryAmount />
                <GrandTotal grandTotal={itemsAmount} />
            </div>
        )
    }
}

export default BillingAmount
