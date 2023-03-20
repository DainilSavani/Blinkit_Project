import React, { Component } from "react";

//constants 
import { CART_DETAILS } from './helper/constData';

//componenets
import Navbar from './components/organism/navBar';
import MainBillingSection from "./components/billingPage/organism/mainBillingSection";
import BillingAmountsSection from './components/billingPage/molecules/billingAmountsSection';
import ProceedPayment from "./components/billingPage/molecules/proceedPayment";
import ServiceSection from './components/molecules/services';
import Footer from './components/molecules/footer';

class BillingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vegetableItems: [],
            cartDetails: CART_DETAILS,
            searchBarValue: "",
        };
        this.setState = this.setState.bind(this);
    }
    componentDidMount() {
        fetch("http://localhost:5000/VEGETABLE_ITEMS") //fetching data through json server
            .then((response) => response.json())
            .then((result) =>
                this.setState((prevState) => ({ ...prevState, vegetableItems: result }))
            )
            .catch(console.log);
    }
    render() {
        return (
            <>
                <Navbar 
                    cartDetails = { this.state.cartDetails } 
                    setState = { this.setState }
                />
                <MainBillingSection 
                    vegetableItems = { this.state.vegetableItems }
                    cartDetails = { this.state.cartDetails }
                    searchBarValue = { this.state.searchBarValue }
                    setState = { this.setState }
                />
                <BillingAmountsSection cartDetails = { this.state.cartDetails } />
                <ProceedPayment cartDetails = { this.state.cartDetails } />
                <ServiceSection />
                <Footer />
            </>
        );
    }
}

export default BillingPage;