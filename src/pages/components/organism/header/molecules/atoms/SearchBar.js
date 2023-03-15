import React from 'react';

function SearchBar(props) {

    const { setSearchBarValue } = props;

    return (
        <input id="searchBar" type="text" placeholder="search" autoComplete='off'
            onKeyUp={(event) => setSearchBarValue(event.target.value)} />
    )
}

export default SearchBar

