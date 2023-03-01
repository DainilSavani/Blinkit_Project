import React, { Component } from 'react';
import Filter from '../../molecules/mainContent/Filter';
import './productHead.scss';

class ProductHead extends Component {
    render() {
        const {filterHandler} = this.props;
        return (
            <header className='productHead'>
                <h2>Buy Fresh Vegetables Online</h2>
                <Filter filterHandler={filterHandler} />
            </header>
        )
    }
}

export default ProductHead
