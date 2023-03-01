import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {searchVegetable} = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetable(event.target.value)} />
        )
    }
}

export default SearchBar
