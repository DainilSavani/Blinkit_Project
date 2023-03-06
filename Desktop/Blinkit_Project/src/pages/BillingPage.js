import React, { Component } from 'react';

//constants and helper functions fetching
import VEGETABLE_ITEMS from '../data/vegetableData.json';
import { CART_STATUS } from '../data/constData';
import { searchVegetable } from './components/billingPage/organisms/header/molecules/atoms/SearchBar';
import { clearCartHandler } from './components/billingPage/organisms/main/molecules/atoms/BillSectionHeading';
import { addItemsToCartHandler, decreaseItemsFromCartHandler, removeItemFromCartHandler } 
        from './components/billingPage/organisms/main/molecules/atoms/billItemBtnsHelperFunction';

//componenets fetching
import Navbar from './components/billingPage/organisms/header/Navbar';
import MainBillingSection from './components/billingPage/organisms/main/MainBillingSection';
import OurServices from './components/billingPage/molecules/services/OurServices';
import Foot from './components/billingPage/molecules/footer/Foot';

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
        this.addItemsToCartHandler = addItemsToCartHandler.bind(this);
        this.decreaseItemsFromCartHandler = decreaseItemsFromCartHandler.bind(this);
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

