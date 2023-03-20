import React, { Component } from 'react';

class ItemImage extends Component {
    render() {
        const {vegetableItem} = this.props;
        return (
            <div className='itemImgDiv'>
                <img name={vegetableItem.name} className='itemImg' src={vegetableItem.src} alt={vegetableItem.name} />
            </div>
        )
    }
}

export default ItemImage
