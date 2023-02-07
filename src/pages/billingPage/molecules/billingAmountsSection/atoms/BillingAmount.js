import React, { Component } from 'react'

class BillingAmount extends Component {
    render() {
        const { classNameValue, billingAmountTitle, billingAmountPrice, isSignBeforeAmount, children } = this.props;
        return (children)
            ? <div className={classNameValue}>
                <p>{billingAmountTitle}</p>
                {children}
            </div>
            : <div className={classNameValue}>
                <p>{billingAmountTitle}</p>
                {isSignBeforeAmount ? <p>-₹{billingAmountPrice}</p> : <p>₹{billingAmountPrice}</p>}
            </div>
    }
}

export default BillingAmount
