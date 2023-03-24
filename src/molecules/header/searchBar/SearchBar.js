import React, { Component } from 'react';
import { PropTypes } from "prop-types";

// helper function
import searchVegetableHandler from './helpers/searchVegetableHandler';

// style
import './searchBar.scss';

class SearchBar extends Component {
    render() {
        const { homePageSetState } = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetableHandler(homePageSetState, event.target.value, )} />
        )
    }
}

SearchBar.propTypes = {
    homePageSetState: PropTypes.func
}
SearchBar.defaultProps = {
    homePageSetState: () => {}
}

export default SearchBar;