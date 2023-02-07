import React, { Component } from 'react';

// components
import Header from './atoms/header';
import OrderConfirmationSection from './atoms/orderConfirmSection';
import TrackOrderSection from './molecules/trackOrderSection';

// style
import './orderConfirmationPage.scss';

class OrderConfirmationPage extends Component {
    render() {
        return (
            <div className='orderConfirmationPage'>
                <Header />
                <OrderConfirmationSection {...this.props} />
                <TrackOrderSection />
            </div>
        )
    }
}

export default OrderConfirmationPage
