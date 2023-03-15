import React, { memo } from 'react';
import { SUB_HEADER_CATEGORIES, MORE_SUB_HEADER_CATEGORIES } from '../../../../../data/constData';
import './subHeaderCategories.scss';

function SubHeaderCategories() {

    const loadCategories = () => SUB_HEADER_CATEGORIES.map((li, index) => <li key={index}>{li}</li>);

    const loadMoreCategories = () => MORE_SUB_HEADER_CATEGORIES.map((category, index) => {
        if (index === 0)
            return <option key={category.value} value={category.value} hidden>{category.name}</option>
        else
            return <option key={category.value} value={category.value}>{category.name}</option>
    })

    return (
        <ul className='list'>
            {loadCategories()}
            <select placeholder='more' >{loadMoreCategories()}</select>
        </ul>
    )
}

export default memo(SubHeaderCategories);