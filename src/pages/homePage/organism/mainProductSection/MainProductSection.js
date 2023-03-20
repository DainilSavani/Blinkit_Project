import React, { Component } from 'react';

// components
import SideBar from './molecules/sideBar';
import ProductHead from './molecules/productHead';
import ProductItem from './molecules/productItem';

// style
import './mainProductSection.scss';

class MainProductSection extends Component {
    render() {
        return (
            <div className='content'>
                <SideBar />
                <div className='product'>
                    <ProductHead />
                    <ProductItem />
                </div>
            </div>
        )
    }
}

export default MainProductSection
