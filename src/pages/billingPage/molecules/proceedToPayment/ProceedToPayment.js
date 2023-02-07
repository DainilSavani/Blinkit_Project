import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// component
import ProceedToPaymentItems from './atoms';

// style
import './proceedToPayment.scss';

class ProceedToPayment extends Component {
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
                                <p>Proceed {'>'}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

ProceedToPayment.propTypes = {
    cartDetails: PropTypes.object
}
ProceedToPayment.defaultProps = {
    cartDetails: {}
}

export default connect(mapStateToProps)(ProceedToPayment);