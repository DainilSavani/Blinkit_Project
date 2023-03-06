import React, { Component } from 'react';

export const searchVegetable = function searchVegetable(value) {
    this.setState({ searchBarValue: value });
}

export class SearchBar extends Component {

    render() {
        const { searchVegetable } = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetable(event.target.value)} />
        )
    }
}
