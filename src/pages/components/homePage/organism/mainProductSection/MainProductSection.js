import React, { Component } from 'react';

// components
import SideBar from './molecules/sideBar';
import ProductHead from './molecules/productHead';
import ProductItem from './molecules/productItem';

// style
import './mainProductSection.scss';

class MainProductSection extends Component {
    render() {
        const { setState } = this.props;
        return (
            <div className='content'>
                <SideBar />
                <div className='product'>
                    <ProductHead setState={setState}/>
                    <ProductItem {...this.props}/>
                </div>
            </div>
        )
    }
}

export default MainProductSection
