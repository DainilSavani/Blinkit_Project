import React, { Component } from 'react';
import { connect } from 'react-redux';

// componenets
import Navbar from '../organism/navBar';
import MainBillingSection from './organism/mainBillingSection';
import BillingAmountsSection from './molecules/billingAmountsSection';
import ProceedToPayment from './molecules/proceedToPayment';
import ServiceSection from '../molecules/services';
import Footer from '../molecules/footer';

// action
import { fetchVegetableItems } from '../../redux/actions';

class BillingPage extends Component {

    componentDidMount() {
        this.props.fetchVegetableItems();
    }

    render() {
        return (
            <>
                <Navbar />
                <MainBillingSection />
                <BillingAmountsSection />
                <ProceedToPayment />
                <ServiceSection />
                <Footer />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVegetableItems: () => dispatch(fetchVegetableItems())
    }
}

export default connect(null, mapDispatchToProps)(BillingPage);