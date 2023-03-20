import React, { Component } from 'react';

// components
import UserLocation from './molecules/userLocation';
import SearchBar from './molecules/atoms';
import CartBtn from './molecules/cartBtn';

// style
import './navbar.scss';

export class Navbar extends Component {
    render() {
        const { cartDetails, setState } = this.props;
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="/images/logo.webp" alt="logo"/>
                <UserLocation />
                <SearchBar setState = { setState } />
                <a id="loginLink">Login</a>
                <CartBtn cartDetails = { cartDetails }/>
            </header>
        )
    }
}

export default Navbar
