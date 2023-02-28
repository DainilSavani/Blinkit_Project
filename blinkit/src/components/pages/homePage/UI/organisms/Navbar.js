import React, { Component } from 'react';
import Logo from '../atoms/header/Logo';
import Location from '../molecules/header/Location';
import SearchLogin from '../molecules/header/SearchLogin';
import CartBtn from '../molecules/header/CartBtn';
import './navbar.scss';

export class Navbar extends Component {
    render() {
        return (
            <header className='navBar'>
                <Logo />
                <Location />
                <SearchLogin />
                <CartBtn />
            </header>
        )
    }
}

export default Navbar
