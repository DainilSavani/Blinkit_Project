import React, { Component } from 'react';

//fetching constants and functions
import vegetableData from '../data/vegetablesData.json';
import {FILTER_TYPES, CART_STATUS} from '../data/constData';
import { addToCartHandler, removeFromCartHandler } from './components/homePage/organisms/mainContent/molecules/itemPriceHelperFunction';
import { searchVegetable } from './components/homePage/organisms/header/molecules/atoms/SearchBar';
import { filterHandler } from './components/homePage/organisms/mainContent/molecules/atoms/Filter';

//importing components
import Navbar from './components/homePage/organisms/header/Navbar'
import SubHeaderCategories from './components/homePage/organisms/header/molecules/SubHeaderCategories'
import MainProductSection from './components/homePage/organisms/mainContent/MainProductSection';
import OurServices from './components/homePage/molecules/services/OurServices';
import Foot from './components/homePage/molecules/footer/Foot';

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetableData: vegetableData,
            cartStatus: CART_STATUS,
            searchBarValue: "",
            filterType: FILTER_TYPES[0].value
        }
        this.addToCartHandler = addToCartHandler.bind(this);
        this.removeFromCartHandler = removeFromCartHandler.bind(this);
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
