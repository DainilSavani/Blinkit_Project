import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ItemImage extends Component {
    render() {
        const { vegetableItem } = this.props;
        const { name, src } = vegetableItem;
        return (
            <div className='itemImgDiv'>
                <img name={name} className='itemImg' src={src} alt={name} />
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