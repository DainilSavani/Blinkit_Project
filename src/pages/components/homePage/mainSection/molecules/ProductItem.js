import React from 'react';
import ItemImage from './atoms/ItemImage'
import ItemSourcedTime from './atoms/ItemSourcedTime';
import ItemPrice from './ItemPrice';
import { useSelector } from 'react-redux';
import './productItem.scss';

function ProductItem() {

    const loadProductItems = ({ vegetableData, searchBarValue, filterType }) =>
        vegetableData.map((vegetableItem, itemIndex) => {
            if (vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase()) && (filterType === 'all' || filterType === vegetableItem.type)) {
                const itemWeight = vegetableItem.weight >= 1 ? vegetableItem.weight + 'kg' : vegetableItem.weight * 1000 + 'g';
                return (
                    <div key={itemIndex} className='item'>
                        <button className='discount'>{vegetableItem.discount}</button>
                        <ItemImage vegetableItem={vegetableItem} />
                        <ItemSourcedTime />
                        <div className="itemName">{vegetableItem.name}</div>
                        <div className="itemWeight">{itemWeight}</div>
                        <ItemPrice itemIndex={itemIndex} vegetableItem={vegetableItem} />
                    </div>
                )
            }
        });
    
    return (
        <section className='container'>
            {loadProductItems(useSelector(state => state))}
        </section>
    )
}

export default ProductItem