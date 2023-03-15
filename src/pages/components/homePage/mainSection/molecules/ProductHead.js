import React from 'react';
import Filter from './atoms/Filter';
import './productHead.scss';

function ProductHead(props) {
    return (
        <header className='productHead'>
            <h2>Buy Fresh Vegetables Online</h2>
            <Filter {...props} />
        </header>
    )
}

export default ProductHead