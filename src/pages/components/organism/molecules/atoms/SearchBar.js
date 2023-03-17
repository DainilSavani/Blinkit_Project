import React, { Component } from 'react';

export const searchVegetableHandler = function searchVegetableHandler(value) {
    this.setState({ searchBarValue: value });
}

export class SearchBar extends Component {

    render() {
        const { searchVegetableHandler } = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetableHandler(event.target.value)} />
        )
    }
}
