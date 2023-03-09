import React, { Component } from 'react';
import { FILTER_TYPES } from '../../../../../../../data/constData';
import { filterHandler } from '../../../../../../../redux/actions';
import { connect } from 'react-redux';

class Filter extends Component {

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

const mapDispatchToprops = dispatch => {
    return {
        filterHandler: (filterType) => dispatch(filterHandler(filterType))
    }
}

export default connect(null, mapDispatchToprops)(Filter);