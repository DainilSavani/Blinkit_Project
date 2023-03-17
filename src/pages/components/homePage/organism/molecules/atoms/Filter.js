import React, { Component } from 'react';

// constant
import { FILTER_TYPES } from '../../../../../helper/constData';

export const filterHandler = function filterHandler(value){
    this.setState({filterType: value});
}

export class Filter extends Component {

    loadFilterOptions = () => FILTER_TYPES.map((option, index) => <option key={index} value={option.value}>{option.name}</option>)

    render() {
        const {filterHandler} = this.props;
        return (
            <div className='filter'>
                <p>Filter By</p>
                <select name='filterBar' id='filterBar' onChange={(event) => filterHandler(event.target.value)}>
                    {this.loadFilterOptions()}
                </select>
            </div>
        )
    }
}