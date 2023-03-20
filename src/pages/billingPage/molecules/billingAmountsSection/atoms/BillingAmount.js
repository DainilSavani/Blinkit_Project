import React, { Component } from 'react'

export class BillingAmount extends Component {
    render() {
        const { classNameValue, billingAmountTitle, billingAmountPrice, isSignBeforeAmount, children } = this.props;
        const renderAmount = () => isSignBeforeAmount ? <p>-₹{billingAmountPrice}</p> : <p>₹{billingAmountPrice}</p>;
        if (children)
            return (
                <div className={classNameValue}>
                    <p>{billingAmountTitle}</p>
                    {children}
                </div>
            )
        else
            return (
                <div className={classNameValue}>
                    <p>{billingAmountTitle}</p>
                    {renderAmount()}
                </div>
            )
    }
}

export default BillingAmount
