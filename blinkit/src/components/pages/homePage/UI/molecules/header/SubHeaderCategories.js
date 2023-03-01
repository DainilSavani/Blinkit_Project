import React, { Component } from 'react';
import { SUB_HEADER_CATEGORIES, MORE_SUB_HEADER_CATEGORIES } from '../../../../../../data/constData';
import './subHeaderCategories.scss';

class SubHeaderCategories extends Component {

    loadCategories = () => SUB_HEADER_CATEGORIES.map((li, index) => <li key={index}>{li}</li>);

    loadMoreCategories = () => MORE_SUB_HEADER_CATEGORIES.map((category, index) => {
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

export default SubHeaderCategories
