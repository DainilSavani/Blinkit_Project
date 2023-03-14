import React from 'react';
import { FILTER_TYPES } from '../../../../../../data/constData';
import { filterHandler } from '../../../../../../redux/actions';
import { useDispatch } from 'react-redux';

function Filter() {

    const dispatch = useDispatch();
    const loadFilterOptions = () => FILTER_TYPES.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)

    return (
        <div className='filter'>
            <p>Filter By</p>
            <select name='filterBar' id='filterBar' onChange={(event) => dispatch(filterHandler(event.target.value))}>
                {loadFilterOptions()}
            </select>
        </div>
    )
}

export default Filter
