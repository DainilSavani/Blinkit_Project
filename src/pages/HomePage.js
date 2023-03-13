import React, { Component } from 'react';

//fetching constants and functions
import VEGETABLE_ITEMS from '../data/vegetablesData.json';
import {FILTER_TYPES, CART_STATUS} from '../data/constData';
import { incrementItemInCartHandler, decrementItemInCartHandler } from './components/atoms/itemCartBtnHelperFunctions';
import { searchVegetable } from './components/organism/header/molecules/atoms/SearchBar';
import { filterHandler } from './components/homePage/mainSection/molecules/atoms/Filter';

//importing components
import Navbar from './components/organism/header/Navbar';
import SubHeaderCategories from './components/homePage/molecules/subHeaderCategories/SubHeaderCategories'
import MainProductSection from './components/homePage/mainSection/MainProductSection';
import OurServices from './components/molecules/services/OurServices';
import Foot from './components/molecules/footer/Foot';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetableItems: VEGETABLE_ITEMS,
            cartStatus: CART_STATUS,
            searchBarValue: "",
            filterType: FILTER_TYPES[0].value
        }
        this.incrementItemInCartHandler = incrementItemInCartHandler.bind(this);
        this.decrementItemInCartHandler = decrementItemInCartHandler.bind(this);
        this.searchVegetable = searchVegetable.bind(this);
        this.filterHandler = filterHandler.bind(this);
    }
    
    render() {
        return (
            <>
                <Navbar {...this} />
                <SubHeaderCategories />
                <MainProductSection {...this} />
                <OurServices />
                <Foot />
            </>
        )
    }
}

export default HomePage
