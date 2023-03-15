import React from 'react';
import Location from '../header/molecules/Location';
import SearchBar from './molecules/atoms/SearchBar';
import CartBtn from './molecules/CartBtn';
import './navbar.scss';

function Navbar(props) {
    const { cartStatus } = props;
    return (
        <header className='navBar'>
            <img id="logo" name="logo" src="/images/logo.webp" alt="logo" />
            <Location />
            <SearchBar {...props} />
            <a id="loginLink">Login</a>
            <CartBtn cartStatus={cartStatus} />
        </header>
    )
}

export default Navbar