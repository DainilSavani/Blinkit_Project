import React, { Component } from 'react';

// components
import UserLocation from '../userLocation';
import SearchBar from '../searchBar';
import CartBtn from '../cartBtn';

// style
import './navbar.scss';

class Navbar extends Component {
    render() {
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="https://blinkit.com/9f644712ea8611916099.png" alt="logo"/>
                <UserLocation />
                <SearchBar {...this.props} />
                <a id="loginLink">Login</a>
                <CartBtn />
            </header>
        )
    }
}

export default Navbar