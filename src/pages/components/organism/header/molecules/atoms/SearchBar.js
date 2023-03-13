import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchVegetable } from '../../../../../../redux/actions';

class SearchBar extends Component {

    render() {
        const {searchVegetable} = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetable(event.target.value)} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchVegetable: (searchValue) => dispatch(searchVegetable(searchValue))
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
