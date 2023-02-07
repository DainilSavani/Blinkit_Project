import React, { Component } from 'react';

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
            searchBarValue: ""
        }
        this.setState = this.setState.bind(this);
    }
    
    render() {
        const { vegetableItems, cartDetails, appSetState } = this.props;
        return (
            <div className='homePage'>
                <Navbar 
                    cartDetails = { cartDetails } 
                    parentSetState = { this.setState }
                />
                <SubHeaderCategories />
                <MainProductSection 
                    vegetableItems = { vegetableItems } 
                    searchBarValue = { this.state.searchBarValue }
                    parentSetState = { this.setState }
                    appSetState = { appSetState }
                />
                <ServiceSection />
                <Footer />
            </div>
        )
    }
}

export default HomePage
