import React from 'react';
import ProceedItems from './atoms/ProceedItems';
import './proceedPayment.scss';

function ProceedPayment(props) {
    return (
        <section className='paymentProceedSection'>
            <div className="coupon">Coupons are only applicable on Blinkit app</div>
            <div className='proceed'>
                <div className='proceedBar'>
                    <ProceedItems {...props} />
                    <div className="proceedBtn">
                        <p>Proceed {'>'}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProceedPayment