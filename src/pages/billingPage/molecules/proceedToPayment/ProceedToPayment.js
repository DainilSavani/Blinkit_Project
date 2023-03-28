import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// component
import ProceedToPaymentItems from './atoms';

// style
import './proceedToPayment.scss';

class proceedToPayment extends Component {
    render() {
        const { itemsCount } = this.props.cartDetails;
        if (itemsCount)
            return (
                <section className='paymentProceedSection'>
                    <div className="coupon">Coupons are only applicable on Blinkit app</div>
                    <div className='proceed'>
                        <div className='proceedBar'>
                            <ProceedToPaymentItems {...this.props} />
                            <div className="proceedBtn">
                                <Link to='/confirmation' >
                                    <p>Proceed {'>'}</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
}

export default proceedToPayment
