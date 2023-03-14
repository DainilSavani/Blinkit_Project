import React from 'react';
import { useDispatch } from 'react-redux';
import { searchVegetable } from '../../../../../../redux/actions';

function SearchBar() {

    const dispatch = useDispatch();

    return (
        <input id="searchBar" type="text" placeholder="search" autoComplete='off'
            onKeyUp={(event) => dispatch(searchVegetable(event.target.value))} />
    )
}

export default SearchBar;