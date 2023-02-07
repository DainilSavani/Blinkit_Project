import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

// helper functions
import { renderFilterOptions, filterChangeHandler } from './helpers/filter.general';

// style
import './filter.scss';

class Filter extends Component {
    constructor(props) {
        super(props)
        this.renderFilterOptions = renderFilterOptions();
    }

    render() {
        const { productContainerSetState } = this.props;
        return (
            <div className='filter'>
                <p>Filter By</p>
                <select name='filterBar' id='filterBar' onChange={(event) => filterChangeHandler(event.target.value, productContainerSetState)}>
                    {this.renderFilterOptions}
                </select>
            </div>
        )
    }
}

Filter.propTypes = {
    productContainerSetState: PropTypes.func
}
Filter.defaultProps = {
    productContainerSetState: () => {}
}

export default Filter;