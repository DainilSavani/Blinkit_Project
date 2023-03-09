import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store'

//componenets fetching
import Navbar from './components/billingPage/organisms/header/Navbar';
import MainBillingSection from './components/billingPage/organisms/main/MainBillingSection';
import OurServices from './components/billingPage/molecules/services/OurServices';
import Foot from './components/billingPage/molecules/footer/Foot';

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

