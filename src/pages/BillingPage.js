import React, { Component } from 'react';

//constants and helper functions fetching
import VEGETABLE_ITEMS from '../data/vegetableData.json';
import { CART_STATUS } from '../data/constData';
import { searchVegetable } from './components/organism/header/molecules/atoms/SearchBar';
import { clearCartHandler } from './components/billingPage/mainSection/molecules/atoms/BillSectionHeading';
import { incrementItemInCartHandler, decrementItemInCartHandler, removeItemFromCartHandler } 
        from './components/atoms/itemCartBtnHelperFunctions';

//componenets fetching
import Navbar from './components/organism/header/Navbar';
import MainBillingSection from './components/billingPage/mainSection/MainBillingSection';
import OurServices from './components/molecules/services/OurServices';
import Foot from './components/molecules/footer/Foot';

class BillingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetableItems: VEGETABLE_ITEMS,
            cartStatus: CART_STATUS,
            searchBarValue: "",
        }
        //binding helper functions
        this.searchVegetable = searchVegetable.bind(this);
        this.incrementItemInCartHandler =incrementItemInCartHandler.bind(this);
        this.decrementItemInCartHandler = decrementItemInCartHandler.bind(this);
        this.removeItemFromCartHandler = removeItemFromCartHandler.bind(this);
        this.clearCartHandler = clearCartHandler.bind(this);
    }

    render() {
        return (
            <>
                <Navbar {...this}/>
                <MainBillingSection {...this} />
                <OurServices />
                <Foot />
            </>
        )
    }
}

export default BillingPage

