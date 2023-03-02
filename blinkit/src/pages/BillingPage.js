import React, { Component } from 'react';
import VEGETABLE_ITEMS from '../data/vegetableData.json';
import { searchVegetable, addItemsToCartHandler, decreaseItemsFromCartHandler, 
         removeItemFromCartHandler, clearCartHandler } from '../helperFunction/stateChangeFunction';
import {CART_STATUS} from '../data/constData';
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
                    vegetableItems={this.state.vegetableItems}
                    cartStatus={this.state.cartStatus}
                    searchBarValue={this.state.searchBarValue}
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
