import React, { Component } from 'react';

//importing constants and functions
import { FILTER_TYPES, CART_DETAILS } from './helper/constData';

//importing components
import Navbar from './components/organism/navBar';
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
        this.setState = this.setState.bind(this);
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
                    setState = { this.setState }
                />
                <SubHeaderCategories />
                <MainProductSection 
                    vegetableItems = { this.state.vegetableItems } 
                    searchBarValue = { this.state.searchBarValue }
                    filterType = { this.state.filterType }
                    setState = { this.setState }
                />
                <ServiceSection />
                <Footer />
            </>
        )
    }
}

export default HomePage
