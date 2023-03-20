import React, { Component } from 'react';
import produce from 'immer';

// constant
import { FILTER_TYPES } from '../../../../../../../helper/constData';

export const filterHandler = function filterHandler(value, setState){
    setState(produce(draft => {
        draft.filterType = value;
    }));
}

export class Filter extends Component {

    loadFilterOptions = () => FILTER_TYPES.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)

    render() {
        const { setState } = this.props;
        return (
            <div className='filter'>
                <p>Filter By</p>
                <select name='filterBar' id='filterBar' onChange={(event) => filterHandler(event.target.value, setState)}>
                    {this.loadFilterOptions()}
                </select>
            </div>
        )
    }
}