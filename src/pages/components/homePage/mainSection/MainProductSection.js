import React from 'react';
import SideBar from './molecules/SideBar';
import ProductHead from './molecules/ProductHead';
import ProductItem from './molecules/ProductItem';
import './mainProductSection.scss';

function MainProductSection(props) {
    const { filterHandler } = props;
    return (
        <div className='content'>
            <SideBar />
            <div className='product'>
                <ProductHead filterHandler={filterHandler} />
                <ProductItem {...props} />
            </div>
        </div>
    )
}

export default MainProductSection