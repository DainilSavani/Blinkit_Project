import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import ItemDecrementBtn from '../itemDecrementBtn';
import ItemIncrementBtn from '../itemIncrementBtn';
import ItemAddBtn from '../itemAddBtn';

// style
import './itemCartBtns.scss';

class ItemCartBtns extends Component {
    render() {
        const { vegetableItem } = this.props;
        return (vegetableItem.count)
            ? <div className="billItemBtn">
                <ItemDecrementBtn {...this.props} />
                <div className='itemValue'>{vegetableItem.count}</div>
                <ItemIncrementBtn  {...this.props} />
            </div>
            : <ItemAddBtn {...this.props} />
    }
}

ItemCartBtns.propTypes = {
    vegetableItemCount: PropTypes.number
}
ItemCartBtns.defaultProps = {
    vegetableItemCount: 0
}

export default ItemCartBtns