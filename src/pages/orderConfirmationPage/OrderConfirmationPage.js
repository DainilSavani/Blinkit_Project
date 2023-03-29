import React, { Component } from 'react';

// components
import Header from './atoms/header';
import OrderConfirmationSection from './molecules/orderConfirmSection';
import TrackOrderSection from './molecules/trackOrderSection';

// style
import './orderConfirmationPage.scss';

class OrderConfirmationPage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='orderConfirmationPage'>
                <Header />
                <OrderConfirmationSection />
                <TrackOrderSection />
            </div>
        )
    }
}

export default OrderConfirmationPage
