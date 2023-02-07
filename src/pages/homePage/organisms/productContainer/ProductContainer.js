import React, { Component } from 'react';

// constants
import FILTER_TYPES from './constants/productContainerConstants';

// components
import ProductHead from './molecules/productHead';
import ProductItem from './molecules/productItem';

class ProductContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterType: FILTER_TYPES[0].value
        }
        this.setState = this.setState.bind(this);
    }
    render() {
        return (
            <div className='product'>
                <ProductHead productContainerSetState={this.setState} />
                <ProductItem filterType={this.state.filterType} {...this.props} />
            </div>
        )
    }
}

export default ProductContainer