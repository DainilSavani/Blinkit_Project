import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store';

//importing components
import Navbar from '../organism/navBar'
import SubHeaderCategories from './molecules/subHeaderCategories'
import MainProductSection from './organism/mainProductSection';
import OurServices from '../molecules/services';
import Foot from '../molecules/footer';

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
