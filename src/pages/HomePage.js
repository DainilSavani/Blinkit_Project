import React, { Component } from 'react';

//importing constants and functions
import { FILTER_TYPES, CART_DETAILS } from './helper/constData';
import { incrementItemHandler, incrementCartHandler, decrementItemHandler, decrementCartHandler } 
    from './components/molecules/itemCartBtn/helper/itemCartBtnHelperFunctions';
import { searchVegetableHandler } from './components/organism/molecules/atoms/SearchBar';
import { filterHandler } from './components/homePage/organism/molecules/atoms/Filter';

//importing components
import Navbar from './components/organism';
import SubHeaderCategories from './components/homePage/molecules'
import MainProductSection from './components/homePage/organism';
import ServiceSection from './components/molecules/services';
import Footer from './components/molecules/footer';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetableItems: [],
            cartDetails: CART_DETAILS,
            searchBarValue: "",
            filterType: FILTER_TYPES[0].value
        }
        this.incrementItemHandler = incrementItemHandler.bind(this);
        this.incrementCartHandler = incrementCartHandler.bind(this);
        this.decrementItemHandler = decrementItemHandler.bind(this);
        this.decrementCartHandler = decrementCartHandler.bind(this);
        this.searchVegetableHandler = searchVegetableHandler.bind(this);
        this.filterHandler = filterHandler.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:5000/VEGETABLE_ITEMS')  //fetching data through json server
        .then(response => response.json())
        .then(result => this.setState(prevState => ({...prevState, vegetableItems: result})))
        .catch(console.log);
    }
    
    render() {
        return (
            <>
                <Navbar 
                    cartDetails = { this.state.cartDetails } 
                    searchVegetableHandler = { this.searchVegetableHandler } 
                />
                <SubHeaderCategories />
                <MainProductSection 
                    vegetableItems = { this.state.vegetableItems } 
                    searchBarValue = { this.state.searchBarValue }
                    filterType = { this.state.filterType }
                    incrementItemHandler = { this.incrementItemHandler }
                    decrementItemHandler = { this.decrementItemHandler }
                    incrementCartHandler = { this.incrementCartHandler }
                    decrementCartHandler = { this.decrementCartHandler }
                    filterHandler = { this.filterHandler }
                />
                <ServiceSection />
                <Footer />
            </>
        )
    }
}

export default HomePage
