import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// components
import { ItemImage } from './atoms'
import { ItemSourcedTime } from './atoms';
import ItemPrice from '../itemPrice';

// style
import './productItem.scss';

class ProductItem extends Component {

    renderProductItems = ({ vegetableItems, searchBarValue, filterType }) =>
        vegetableItems.map((vegetableItem, itemIndex) => {
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
        })

    render() {
        const { vegetableItems } = this.props;
        return (
            <section className='container'>
                {this.renderProductItems(this.props)}
            </section>
        )
    }
}

ProductItem.propTypes = {
    vegetableItems: PropTypes.array,
    searchBarValue: PropTypes.string,
    filterType: PropTypes.string
}
ProductItem.defaultProps = {
    vegetableItems: [],
    searchBarValue: "",
    filterType: ""
}

const mapStateToProps = state => {
    return {
        vegetableItems: state.vegetableItems
    }
}

export default connect(mapStateToProps)(ProductItem);