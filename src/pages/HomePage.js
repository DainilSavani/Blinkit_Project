import React, { useState } from 'react';

//fetching constants
import VEGETABLE_ITEMS from '../data/vegetablesData.json';
import { FILTER_TYPES, CART_STATUS } from '../data/constData';

//importing components
import Navbar from './components/organism/header/Navbar';
import SubHeaderCategories from './components/homePage/molecules/subHeaderCategories/SubHeaderCategories'
import MainProductSection from './components/homePage/mainSection/MainProductSection';
import OurServices from './components/molecules/services/OurServices';
import Foot from './components/molecules/footer/Foot';

function HomePage() {

    const [vegetableItems, setVegetableItems] = useState(VEGETABLE_ITEMS);
    const [cartStatus, setCartStatus] = useState(CART_STATUS);
    const [searchBarValue, setSearchBarValue] = useState('');
    const [filterType, filterHandler] = useState(FILTER_TYPES[0].value); //initial filter value = all
    return (
        <>
            <Navbar 
                cartStatus={cartStatus} 
                searchBarValue={searchBarValue} 
                setSearchBarValue={setSearchBarValue} 
            />
            <SubHeaderCategories />
            <MainProductSection 
                vegetableItems={vegetableItems} setVegetableItems={setVegetableItems}
                cartStatus={cartStatus} setCartStatus={setCartStatus}
                searchBarValue={searchBarValue} setSearchBarValue={setSearchBarValue}
                filterType={filterType} filterHandler={filterHandler} 
            />
            <OurServices />
            <Foot />
        </>
    )
}

export default HomePage

