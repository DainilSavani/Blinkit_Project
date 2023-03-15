import React from 'react';

function ItemImage(props) {
    const { vegetableItem } = props;
    return (
        <div className='itemImgDiv'>
            <img name={vegetableItem.name} className='itemImg' src={vegetableItem.src} alt={vegetableItem.name} />
        </div>
    )
}

export default ItemImage