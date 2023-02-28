import React, { Component, Fragment } from 'react';
import Search from '../../atoms/header/Search';
import Login from '../../atoms/header/Login';

class SearchLogin extends Component {
    render() {
        return (
            <Fragment>
                <Search/>
                <Login/>
            </Fragment>
        )
    }
}

export default SearchLogin
