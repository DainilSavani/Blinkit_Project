import React, { Component } from 'react';

//constants and helper functions fetching
import VEGETABLE_ITEMS from '../data/vegetableData.json';
import {CART_STATUS} from '../data/constData';
import { searchVegetable, addItemsToCartHandler, decreaseItemsFromCartHandler, 
         removeItemFromCartHandler, clearCartHandler } from '../helperFunction/stateChangeFunction';

//componenets fetching
import Navbar from './components/billingPage/organisms/header/Navbar';
import MainBillingSection from './components/billingPage/organisms/main/MainBillingSection';
import SubHeaderCategories from './components/billingPage/molecules/header/SubHeaderCategories';
import OurServices from './components/billingPage/molecules/service/OurServices';
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
                <Navbar searchVegetable={this.searchVegetable} cartStatus={this.state.cartStatus} />
                <SubHeaderCategories />
                <MainBillingSection
                    {...this.state}
                    addItemsToCartHandler={this.addItemsToCartHandler}
                    decreaseItemsFromCartHandler={this.decreaseItemsFromCartHandler}
                    removeItemFromCartHandler={this.removeItemFromCartHandler}
                    clearCartHandler={this.clearCartHandler} />
                <OurServices />
                <Foot />
            </>
        )
    }
}

export default BillingPage

