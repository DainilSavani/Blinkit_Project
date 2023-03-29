import React, { Component } from 'react';

// components
import SideBar from './molecules/sideBar';
import ProductContainer from '../productContainer'

// style
import './mainProductSection.scss';

class MainProductSection extends Component {
    render() {
        return (
            <div className='content'>
                <SideBar />
                <ProductContainer {...this.props} />
            </div>
        )
    }
}

export default MainProductSection
