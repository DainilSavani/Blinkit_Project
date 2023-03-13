import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

//importing components
import Navbar from './components/organism/header/Navbar'
import SubHeaderCategories from './components/homePage/molecules/subHeaderCategories/SubHeaderCategories'
import MainProductSection from './components/homePage/mainSection/MainProductSection';
import OurServices from './components/molecules/services/OurServices';
import Foot from './components/molecules/footer/Foot';

export class HomePage extends Component {

    render() {
        return (
            <Provider store={store}>
                <Navbar />
                <SubHeaderCategories />
                <MainProductSection />
                <OurServices />
                <Foot />
            </Provider>
        )
    }
}

export default HomePage
