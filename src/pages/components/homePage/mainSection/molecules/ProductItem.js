import React, { Component } from 'react';
import ItemImage from './atoms/ItemImage'
import ItemSourcedTime from './atoms/ItemSourcedTime';
import ItemPrice from './ItemPrice';
import './productItem.scss';

class ProductItem extends Component {

    loadProductItems = (props, state) =>
        state.vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.name.toLowerCase().includes(state.searchBarValue.toLowerCase()) && (state.filterType === 'all' || state.filterType === vegetableItem.type)) {
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
                {this.loadProductItems(this.props, this.props.state)}
            </section>
        )
    }
}

export default ProductItem
