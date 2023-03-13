import React, { Component } from 'react';
import ProceedItems from './atoms/ProceedItems';
import './proceedPayment.scss';

class ProceedPayment extends Component {
    render() {
        return (
            <section className='paymentProceedSection'>
                <div className="coupon">Coupons are only applicable on Blinkit app</div>
                <div className='proceed'>
                    <div className='proceedBar'>
                        <ProceedItems />
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
