import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ItemPriceValue extends Component {
    render() {
        const { discountedPrice, originalPrice } = this.props;
        return (
            <div className="value">
                <p>₹{ discountedPrice }</p>
                <s>₹{ originalPrice }</s>
            </div>
        )
    }
}

ItemPriceValue.propTypes = {
    discountedPrice: PropTypes.number,
    originalPrice: PropTypes.number
}
ItemPriceValue.defaultProps = {
    discountedPrice: 0,
    originalPrice: 0
}

export default ItemPriceValue