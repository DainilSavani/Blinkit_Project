import React, { useState } from 'react';

//constants fetching
import { CART_STATUS } from '../data/constData';
import VEGTABLE_ITEMS from '../data/vegetableData.json';

//componenets fetching
import Navbar from './components/organism/header/Navbar';
import MainBillingSection from './components/billingPage/mainSection/MainBillingSection';
import OurServices from './components/molecules/services/OurServices';
import Foot from './components/molecules/footer/Foot';

function BillingPage() {
    const [vegetableItems, setVegetableItems] = useState(structuredClone(VEGTABLE_ITEMS));
    const [cartStatus, setCartStatus] = useState(CART_STATUS);
    const [searchBarValue, setSearchBarValue] = useState('');
   
    return (
        <>
            <Navbar
                cartStatus={cartStatus}
                setSearchBarValue={setSearchBarValue}
            />
            <MainBillingSection
                vegetableItems={vegetableItems} setVegetableItems={setVegetableItems}
                cartStatus={cartStatus} setCartStatus={setCartStatus} searchBarValue={searchBarValue}
            />
            <OurServices />
            <Foot />
        </>
    )
}

export default BillingPage
