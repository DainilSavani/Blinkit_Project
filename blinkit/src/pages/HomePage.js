import React, { Component } from 'react';
import vegetableData from '../data/vegetablesData.json';
import { searchVegetable, filterHandler, addToCartHandler, removeFromCartHandler } from '../helperFunction/stateChangeFunctions';
import {FILTER_TYPES, CART_STATUS} from '../data/constData';
import Navbar from './components/homePage/organisms/header/Navbar';
import SubHeaderCategories from './components/homePage/molecules/header/SubHeaderCategories';
import MainProductSection from './components/homePage/organisms/mainContent/MainProductSection';
import OurServices from './components/homePage/molecules/service/OurServices';
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
        this.searchVegetable = searchVegetable.bind(this);
        this.filterHandler = filterHandler.bind(this);
        this.addToCartHandler = addToCartHandler.bind(this);
        this.removeFromCartHandler = removeFromCartHandler.bind(this);
    }
    
    
    render() {
        return (
            <>
                <Navbar searchVegetable={this.searchVegetable} cartStatus={this.state.cartStatus} />
                <SubHeaderCategories />
                <MainProductSection
                    filterHandler={this.filterHandler}
                    vegetableItems={this.state.vegetableData}
                    searchBarValue={this.state.searchBarValue}
                    filterType={this.state.filterType}
                    addToCartHandler={this.addToCartHandler}
                    removeFromCartHandler={this.removeFromCartHandler} />
                <OurServices />
                <Foot />
            </>
        )
    }
}

export default HomePage
