import React, { Component } from 'react';

// components
import Filter from './atoms';

// style
import './productHead.scss';

class ProductHead extends Component {

    render() {
        return (
            <header className='productHead'>
                <h2>Buy Fresh Vegetables Online</h2>
                <Filter {...this.props} />
            </header>
        )
    }
}

export default ProductHead
