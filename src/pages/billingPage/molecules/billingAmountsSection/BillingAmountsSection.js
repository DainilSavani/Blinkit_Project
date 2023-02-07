import React, { Component } from 'react';

// constants
import BILLING_AMOUNT_SECTION_DATA from './constants/BillingAmountSectionConstants';

// component
import { BillingAmount, DeliveryAmount } from './atoms';

// style
import './billingAmountsSection.scss';

class BillingAmountsSection extends Component {
    loadBillAmounts = (amountsArray) => BILLING_AMOUNT_SECTION_DATA.map((amount, index) => {
        return (amount.classNameValue === 'deliveryCharge')
            ? <BillingAmount key={index} classNameValue={amount.classNameValue} billingAmountTitle={amount.billingAmountTitle}
                billingAmountPrice={amountsArray[index]} isSignBeforeAmount={amount.isSignBeforeAmount}>
                <DeliveryAmount deliveryAmount={amountsArray[index]} />
            </BillingAmount>
            : <BillingAmount key={index} classNameValue={amount.classNameValue} billingAmountTitle={amount.billingAmountTitle}
                billingAmountPrice={amountsArray[index]} isSignBeforeAmount={amount.isSignBeforeAmount} />

    });
    render() {
        const { itemsOriginalPrice, itemsDiscountedPrice, itemsCount } = this.props.cartDetails;
        const amountsArray = [itemsOriginalPrice, itemsOriginalPrice - itemsDiscountedPrice, 15, itemsDiscountedPrice];
        if (itemsCount)
            return (
                <div className='billingAmounts'>
                    {this.loadBillAmounts(amountsArray)}
                </div>
            )
    }
}

export default BillingAmountsSection
