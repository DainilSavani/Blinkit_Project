import React, { Component } from 'react';
import OriginalAmount from './atoms/OriginalAmount';
import DiscountAmount from './atoms/DiscountAmount';
import DeliveryAmount from './atoms/DeliveryAmount';
import GrandTotal from './atoms/GrandTotal';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
    return {
        cartStatus: state.cartStatus
    }
}

export default connect(mapStateToProps)(BillingAmount);
