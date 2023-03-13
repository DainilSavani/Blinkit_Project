import React, { Component } from 'react';
import SideBar from './molecules/SideBar';
import ProductHead from './molecules/ProductHead';
import ProductItem from './molecules/ProductItem';
import './mainProductSection.scss';

class MainProductSection extends Component {
    render() {
        const {filterHandler} = this.props;
        return (
            <div className='content'>
                <SideBar />
                <div className='product'>
                    <ProductHead filterHandler={filterHandler}/>
                    <ProductItem {...this.props}/>
                </div>
            </div>
        )
    }
}

export default MainProductSection
