import React from 'react';
import { FILTER_TYPES } from '../../../../../../data/constData';

function Filter(props) {

    const { filterHandler } = props;
    const loadFilterOptions = () => FILTER_TYPES.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)

    return (
        <div className='filter'>
            <p>Filter By</p>
            <select name='filterBar' id='filterBar' onChange={(event) => filterHandler(event.target.value)}>
                {loadFilterOptions()}
            </select>
        </div>
    )
}

export default Filter
