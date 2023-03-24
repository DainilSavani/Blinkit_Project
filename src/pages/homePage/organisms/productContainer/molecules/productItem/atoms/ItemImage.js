import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ItemImage extends Component {
    render() {
        const { vegetableItem } = this.props;
        return (
            <div className='itemImgDiv'>
                <img name={vegetableItem.name} className='itemImg' src={vegetableItem.src} alt={vegetableItem.name} />
            </div>
        )
    }
}

ItemImage.propTypes = {
    vegetableItem: PropTypes.object
}
ItemImage.defaultProps = {
    vegetableItem: {}
}

export default ItemImage