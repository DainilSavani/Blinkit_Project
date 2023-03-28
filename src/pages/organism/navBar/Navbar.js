import React, { Component } from 'react';

// components
import UserLocation from './molecules/userLocation';
import SearchBar from './molecules/atoms';
import CartBtn from './molecules/cartBtn';

// style
import './navbar.scss';

export class Navbar extends Component {
    render() {
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="/images/logo.webp" alt="logo"/>
                <UserLocation />
                <SearchBar />
                <a id="loginLink">Login</a>
                <CartBtn />
            </header>
        )
    }
}

export default Navbar
