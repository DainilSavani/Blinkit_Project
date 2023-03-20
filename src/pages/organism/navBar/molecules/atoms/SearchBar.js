import React, { Component } from 'react';
import produce from 'immer';

export const searchVegetableHandler = function searchVegetableHandler(value, setState) {
    setState(produce(draft => {
        draft.searchBarValue = value;
    }));
}

export class SearchBar extends Component {

    render() {
        const { setState } = this.props;
        return (
            <input id="searchBar" type="text" placeholder="search" autoComplete='off'
                onKeyUp={(event) => searchVegetableHandler(event.target.value, setState)} />
        )
    }
}
