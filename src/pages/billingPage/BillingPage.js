import React, { Component } from "react";

//componenets
import Navbar from '../../molecules/header/navbar';
import MainBillingSection from "./molecules/mainBillingSection";
import BillingAmountsSection from './molecules/billingAmountsSection';
import ProceedToPayment from "./molecules/proceedToPayment";
import ServiceSection from '../../molecules/services/servicesSection';
import Footer from '../../molecules/footerContent/footer';

// style
import './billingPage.scss';

class BillingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBarValue: "",
        };
        this.setState = this.setState.bind(this);
    }
    
    render() {
        return (
            <div className="billingPage">
                <Navbar parentSetState={this.setState} />
                <MainBillingSection searchBarValue={this.state.searchBarValue} />
                <BillingAmountsSection />
                <ProceedToPayment />
                <ServiceSection />
                <Footer />
            </div>
        );
    }
}

export default BillingPage