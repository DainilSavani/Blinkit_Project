import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'

//componenets fetching
import Navbar from './components/organism/header/Navbar';
import MainBillingSection from './components/billingPage/mainSection/MainBillingSection';
import OurServices from './components/molecules/services/OurServices';
import Foot from './components/molecules/footer/Foot';

class BillingPage extends Component {

    render() {
        return (
            <Provider store={store}>
                <Navbar />
                <MainBillingSection />
                <OurServices />
                <Foot />
            </Provider>
        )
    }
}

export default BillingPage

