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
    componentDidMount() {
        fetch("http://localhost:5000/VEGETABLE_ITEMS") //fetching data through json server
            .then((response) => response.json())
            .then((result) =>
                this.setState((prevState) => ({ ...prevState, vegetableItems: result }))
            )
            .catch(console.log);
    }
    render() {
        const { vegetableItems, cartDetails, appSetState } = this.props;
        return (
            <div className="billingPage">
                <Navbar
                    cartDetails={cartDetails}
                    parentSetState={this.setState}
                />
                <MainBillingSection
                    vegetableItems={vegetableItems}
                    cartDetails={cartDetails}
                    searchBarValue={this.state.searchBarValue}
                    appSetState={appSetState}
                />
                <BillingAmountsSection cartDetails={cartDetails} />
                <ProceedToPayment cartDetails={cartDetails} />
                <ServiceSection />
                <Footer />
            </div>
        );
    }
}

export default BillingPage;