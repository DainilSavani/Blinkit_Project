import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

//importing components
import Navbar from './components/homePage/organisms/header/Navbar'
import SubHeaderCategories from './components/homePage/organisms/header/molecules/SubHeaderCategories'
import MainProductSection from './components/homePage/organisms/mainContent/MainProductSection';
import OurServices from './components/homePage/molecules/services/OurServices';
import Foot from './components/homePage/molecules/footer/Foot';

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
