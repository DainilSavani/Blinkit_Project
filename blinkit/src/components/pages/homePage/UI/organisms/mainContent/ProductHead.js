import React, { Component } from 'react';
import Heading from '../../atoms/mainContent/Heading';
import Filter from '../../molecules/mainContent/Filter';
import './productHead.scss';

class ProductHead extends Component {
    render() {
        return (
            <header className='productHead'>
                <Heading />
                <Filter />
            </header>
        )
    }
}

export default ProductHead
