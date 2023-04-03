import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// constants
import BILLING_AMOUNT_SECTION_DATA from './constants/BillingAmountSectionConstants';

// component
import { BillingAmount, DeliveryAmount } from './atoms';

// style
import './billingAmountsSection.scss';

class BillingAmountsSection extends Component {
    renderBillAmounts = (amountsArray) => BILLING_AMOUNT_SECTION_DATA.map((amount, index) =>
        <BillingAmount key={index} classNameValue={amount.classNameValue} billingAmountTitle={amount.billingAmountTitle}
            billingAmountPrice={amountsArray[index]} isSignBeforeAmount={amount.isSignBeforeAmount} >
            {(amount.classNameValue === 'deliveryCharge')
                ? <DeliveryAmount deliveryAmount={amountsArray[index]} />
                : null
            }
        </BillingAmount>

    );
    render() {
        const { itemsOriginalPrice, itemsDiscountedPrice, itemsCount } = this.props.cartDetails;
        const amountsArray = [itemsOriginalPrice, itemsOriginalPrice - itemsDiscountedPrice, 15, itemsDiscountedPrice];
        if (itemsCount)
            return (
                <div className='billingAmounts'>
                    {this.renderBillAmounts(amountsArray)}
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

BillingAmountsSection.propTypes = {
    cartDetails: PropTypes.object
}
BillingAmountsSection.defaultProps = {
    cartDetails: {}
}

export default connect(mapStateToProps)(BillingAmountsSection);