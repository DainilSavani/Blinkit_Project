import React, { Component } from 'react';

// style
import './subHeaderCategories.scss';

const SUB_HEADER_CATEGORIES = ['Vegetables & Fruits', 'Dairy & Breakfast', 'Muchies', 'Cold Drinks & Juices', 'Instant & Frozen Food',
    'Tea, Coffee & Health Drinks', 'Bakery & Biscuits'];
const EXTRA_CATEGORIES = [{
    name: 'More',
    value: null
}, {
    name: 'Atta, Rice & Dal',
    value: 1
}, {
    name: 'Dry Fruits, Masala & Oil',
    value: 2
}, {
    name: 'Sauces & Spreads',
    value: 3
}, {
    name: 'Organic & Premium',
    value: 4
}, {
    name: 'Cleaning Essentials',
    value: 5
}, {
    name: 'Baby Care',
    value: 6
}, {
    name: 'Home & Office',
    value: 7
}, {
    name: 'Personal Care',
    value: 8
}];

class SubHeaderCategories extends Component {
    loadCategories = () => SUB_HEADER_CATEGORIES.map((li, index) => <li key={index}>{li}</li>);

    loadMoreCategories = () => EXTRA_CATEGORIES.map((category, index) => {
        if (index === 0)
            return <option key={category.value} value={category.value} hidden>{category.name}</option>
        else
            return <option key={category.value} value={category.value}>{category.name}</option>
    })

    render() {
        return (
            <ul className='list'>
                {this.loadCategories()}
                <select placeholder='more' >{this.loadMoreCategories()}</select>
            </ul>
        )
    }
}

export default React.memo(SubHeaderCategories);
