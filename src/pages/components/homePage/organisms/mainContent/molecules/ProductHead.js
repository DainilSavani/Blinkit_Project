import React, { Component } from 'react';
import Filter from './atoms/Filter';
import './productHead.scss';

class ProductHead extends Component {

    render() {
        return (
            <header className='productHead'>
                <h2>Buy Fresh Vegetables Online</h2>
                <Filter />
            </header>
        )
    }
}

export default ProductHead
