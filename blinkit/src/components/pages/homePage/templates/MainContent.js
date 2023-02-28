import React, { Component } from 'react';
import Sidebar from '../UI/organisms/mainContent/Sidebar';
import ProductHead from '../UI/organisms/mainContent/ProductHead';
import ProductItem from '../UI/organisms/mainContent/ProductItem';
import './mainContent.scss';

export class MainContent extends Component {
    render() {
        return (
            <div className='content'>
                <aside className='cat'>
                    <Sidebar />
                </aside>
                <div className='product'>
                    <ProductHead />
                    <ProductItem />
                </div>
            </div>
        )
    }
}

export default MainContent
