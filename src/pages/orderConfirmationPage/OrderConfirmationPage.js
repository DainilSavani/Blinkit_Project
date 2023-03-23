import React, { useState } from 'react';

// components
import Header from './atoms';
import OrderConfirmationSection from './molecules/orderConfirmSection';
import TrackOrderSection from './molecules/trackOrderSection';

const CART_DETAILS = {
    itemsCount: 14,
    itemsOriginalPrice: 415,
    itemsDiscountedPrice: 341
}

function OrderConfirmationPage() {
    const [ cartDetails ] = useState(CART_DETAILS);
    const [ userLocation ] = useState('Bangalore');
    return (
        <>
            <Header />
            <OrderConfirmationSection cartDetails={cartDetails} userLocation={userLocation} />
            <TrackOrderSection />
        </>
    )
}

export default OrderConfirmationPage
