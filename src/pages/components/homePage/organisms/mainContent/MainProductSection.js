import React, { Component } from 'react';
import SideBar from './molecules/SideBar';
import ProductHead from './molecules/ProductHead';
import ProductItem from './molecules/ProductItem';
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
