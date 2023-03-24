import React, { Component } from 'react';
import { PropTypes } from "prop-types";

// components
import UserLocation from '../userLocation';
import SearchBar from '../searchBar';
import CartBtn from '../cartBtn';

// style
import './navbar.scss';

class Navbar extends Component {
    render() {
        const { cartDetails, homePageSetState } = this.props;
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="https://blinkit.com/9f644712ea8611916099.png" alt="logo"/>
                <UserLocation />
                <SearchBar homePageSetState = { homePageSetState } />
                <a id="loginLink">Login</a>
                <CartBtn {...cartDetails} />
            </header>
        )
    }
}

Navbar.propTypes = {
    cartDetails: PropTypes.object,
    homePageSetState: PropTypes.func
}

export default Navbar