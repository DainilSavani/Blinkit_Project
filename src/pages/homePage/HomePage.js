import React, { Component } from 'react';
import { connect } from 'react-redux';

//importing components
import Navbar from '../organism/navBar'
import SubHeaderCategories from './molecules/subHeaderCategories'
import MainProductSection from './organism/mainProductSection';
import OurServices from '../molecules/services';
import Foot from '../molecules/footer';

// action
import { fetchVegetableItems } from '../../redux/actions';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchVegetableItems();
    }
    
    render() {
        return (
            <>
                <Navbar />
                <SubHeaderCategories />
                <MainProductSection />
                <OurServices />
                <Foot />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVegetableItems: () => dispatch(fetchVegetableItems())
    }
}

export default connect(null, mapDispatchToProps)(HomePage);