import React, { Component } from 'react';

// contants
import  CART_DETAILS from './contants/homePageConstants';

// helper functions
import { stateSetter, dataFetchError } from './helpers/homePage.general';

// components
import Navbar from '../../molecules/header/navbar';
import SubHeaderCategories from './molecules/subHeaderCategories'
import MainProductSection from './organisms/mainProductSection';
import ServiceSection from '../../molecules/services/servicesSection';
import Footer from '../../molecules/footerContent/footer';

// style
import './homePage.scss';

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vegetableItems: [],
            cartDetails: CART_DETAILS,
            searchBarValue: "",
        }
        this.setState = this.setState.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:5000/VEGETABLE_ITEMS')  //fetching data through json server
        .then(response => response.json())
        .then(result => stateSetter(this.setState, result))
        .catch(dataFetchError);
    }
    
    render() {
        return (
            <div className='homePage'>
                <Navbar 
                    cartDetails = { this.state.cartDetails } 
                    homePageSetState = { this.setState }
                />
                <SubHeaderCategories />
                <MainProductSection 
                    vegetableItems = { this.state.vegetableItems } 
                    searchBarValue = { this.state.searchBarValue }
                    homePageSetState = { this.setState }
                />
                <ServiceSection />
                <Footer />
            </div>
        )
    }
}

export default HomePage
