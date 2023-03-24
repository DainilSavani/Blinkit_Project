import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// components
import ItemPriceValue from './atoms';
import ItemCartBtns from '../../../../../../molecules/itemCartBtn';

// style
import './itemPrice.scss';

class ItemPrice extends Component {
    render() {
        const { vegetableItem } = this.props;
        const { originalPrice, discountedPrice } = vegetableItem;
        return (
            <div className="price">
                <ItemPriceValue discountedPrice={discountedPrice} originalPrice={originalPrice} />
                <ItemCartBtns {...this.props} />
            </div>
        )
    }
}

ItemPrice.propTypes = {
    vegetableItem: PropTypes.object
}
ItemPrice.defaultProps = {
    vegetableItem: {}
}

export default ItemPrice