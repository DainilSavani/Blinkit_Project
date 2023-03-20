import React, { Component } from 'react';

// component
import ProceedItems from './atoms';

// style
import './proceedPayment.scss';

class ProceedPayment extends Component {
    render() {
        const { itemsCount } = this.props;
        if (itemsCount)
            return (
                <section className='paymentProceedSection'>
                    <div className="coupon">Coupons are only applicable on Blinkit app</div>
                    <div className='proceed'>
                        <div className='proceedBar'>
                            <ProceedItems {...this.props} />
                            <div className="proceedBtn">
                                <p>Proceed {'>'}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
}

export default ProceedPayment
