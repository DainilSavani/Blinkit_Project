import React, { Component } from 'react';
import { PropTypes } from "prop-types";

// helper function
import searchVegetableHandler from './helpers/searchVegetableHandler';

// style
import './searchBar.scss';

class SearchBar extends Component {
    render() {
        const { parentSetState } = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetableHandler(parentSetState, event.target.value)} />
        )
    }
}

SearchBar.propTypes = {
    parentSetState: PropTypes.func
}
SearchBar.defaultProps = {
    parentSetState: () => {}
}

export default SearchBar;