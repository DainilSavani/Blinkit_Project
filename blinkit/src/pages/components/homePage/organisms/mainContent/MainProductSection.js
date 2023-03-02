import React, { Component } from 'react';
import SideBar from '../../molecules/sideBar/SideBar';
import ProductHead from './ProductHead';
import ProductItem from '../../molecules/mainContent/ProductItem';
import './mainProductSection.scss';

class MainProductSection extends Component {
    render() {
        const {filterHandler, vegetableItems, searchBarValue, filterType, addToCartHandler, removeFromCartHandler} = this.props;
        return (
            <div className='content'>
                <SideBar />
                <div className='product'>
                    <ProductHead filterHandler={filterHandler} />
                    <ProductItem vegetableItems={vegetableItems} 
                        searchBarValue={searchBarValue} 
                        filterType={filterType}
                        addToCartHandler={addToCartHandler}
                        removeFromCartHandler={removeFromCartHandler}
                    />
                </div>
            </div>
        )
    }
}

export default MainProductSection
