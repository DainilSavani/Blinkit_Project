import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchVegetableHandler } from '../../../../../redux/actions';

class SearchBar extends Component {

    render() {
        const { searchVegetableHandler } = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetableHandler(event.target.value)} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchVegetableHandler: (searchValue) => dispatch(searchVegetableHandler(searchValue))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);