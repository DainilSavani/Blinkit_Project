import React, { Component } from 'react';

// components
import { ItemImage } from './atoms'
import { ItemSourcedTime } from './atoms';
import ItemPrice from '../itemPrice';

// style
import './productItem.scss';

class ProductItem extends Component {

    loadProductItems = (props) =>
        props.vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.name.toLowerCase().includes(props.searchBarValue.toLowerCase()) && (props.filterType === 'all' || props.filterType === vegetableItem.type)) {
                const itemWeight = vegetableItem.weight>=1 ? vegetableItem.weight+'kg' : vegetableItem.weight*1000+'g';
                return (
                    <div key={itemIndex} className='item'>
                        <button className='discount'>{vegetableItem.discount}</button>
                        <ItemImage vegetableItem={vegetableItem} />
                        <ItemSourcedTime />
                        <div className="itemName">{vegetableItem.name}</div>
                        <div className="itemWeight">{itemWeight}</div>
                        <ItemPrice itemIndex={itemIndex} vegetableItem={vegetableItem} {...props} />
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
