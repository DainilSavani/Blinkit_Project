import React, { Component } from 'react';

// components
import Header from './atoms';
import OrderConfirmationSection from './molecules/orderConfirmSection';
import TrackOrderSection from './molecules/trackOrderSection';

class OrderConfirmationPage extends Component {

    render() {
        return (
            <>
                <Header />
                <OrderConfirmationSection />
                <TrackOrderSection />
            </>
        )
    }
}

export default OrderConfirmationPage;