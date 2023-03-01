import React, { Component } from 'react';
import ItemImage from '../../atoms/mainContent/ItemImage'
import ItemSourcedTime from '../../atoms/mainContent/ItemSourcedTime';
import ItemPrice from './ItemPrice';
import './productItem.scss';

class ProductItem extends Component {

    loadProductItems = ({vegetableItems, searchBarValue, filterType, addToCartHandler, removeFromCartHandler}) => 
        vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase()) && (filterType === 'all' || filterType === vegetableItem.type)) {
                const itemWeight = vegetableItem.weight>=1 ? vegetableItem.weight+'kg' : vegetableItem.weight*1000+'g';
                return (
                    <div key={itemIndex} className='item'>
                        <button className='discount'>{vegetableItem.discount}</button>
                        <ItemImage vegetableItem={vegetableItem} />
                        <ItemSourcedTime />
                        <div className="itemName">{vegetableItem.name}</div>
                        <div className="itemWeight">{itemWeight}</div>
                        <ItemPrice itemIndex={itemIndex} vegetableItem={vegetableItem} 
                            addToCartHandler={addToCartHandler} removeFromCartHandler={removeFromCartHandler} />
                    </div>
                )
            }
        });
    render() {
        return (
            <section className='container'>
                {this.loadProductItems(this.props)}
            </section>
        )
    }
}

export default ProductItem
