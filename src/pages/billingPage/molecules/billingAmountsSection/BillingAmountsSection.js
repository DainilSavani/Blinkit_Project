import React, { Component } from 'react';
import { connect } from 'react-redux';

// component
import BillingAmount from './atoms';

// style
import './billingAmountsSection.scss';

const BILLING_AMOUNT_SECTION_DATA = [
    {
        classNameValue: 'originalAmount',
        billingAmountTitle: 'MRP',
        isSignBeforeAmount: false
    }, {
        classNameValue: 'productDiscount',
        billingAmountTitle: 'Product discount',
        isSignBeforeAmount: true
    }, {
        classNameValue: 'deliveryCharge',
        billingAmountTitle: 'Delivery charge',
        isSignBeforeAmount: false
    }, {
        classNameValue: 'grandTotal',
        billingAmountTitle: 'Grand Total',
        isSignBeforeAmount: false
    }
]
const DELIVERY_CHARGE = 15;

class BillingAmountsSection extends Component {
    loadBillAmounts = (amountsArray) => BILLING_AMOUNT_SECTION_DATA.map((amount, index) => {
        if (amount.classNameValue === 'deliveryCharge')
            return (
                <BillingAmount key={index} classNameValue={amount.classNameValue} billingAmountTitle={amount.billingAmountTitle}
                    billingAmountPrice={amountsArray[index]} isSignBeforeAmount={amount.isSignBeforeAmount}>
                    <div className="deliveryAmount">
                        <s>₹{amountsArray[index]}</s>
                        <p>FREE</p>
                    </div>
                </BillingAmount>
            )
        else
            return <BillingAmount key={index} classNameValue={amount.classNameValue} billingAmountTitle={amount.billingAmountTitle}
                billingAmountPrice={amountsArray[index]} isSignBeforeAmount={amount.isSignBeforeAmount} />
    });
    render() {
        const { itemsOriginalPrice, itemsDiscountedPrice, itemsCount } = this.props.cartDetails;
        const amountsArray = [itemsOriginalPrice, itemsOriginalPrice - itemsDiscountedPrice, DELIVERY_CHARGE, itemsDiscountedPrice];
        if (itemsCount)
            return (
                <div className='billingAmounts'>
                    {this.loadBillAmounts(amountsArray)}
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

export default connect(mapStateToProps)(BillingAmountsSection);