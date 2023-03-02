import React, { Component } from 'react';
import Location from '../../molecules/header/Location';
import SearchBar from '../../atoms/header/SearchBar';
import CartBtn from '../../molecules/header/CartBtn';
import './navbar.scss';

export class Navbar extends Component {
    render() {
        const {searchVegetable, cartStatus} = this.props;
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="/images/logo.webp" alt="logo"/>
                <Location />
                <SearchBar searchVegetable={searchVegetable} />
                <a id="loginLink">Login</a>
                <CartBtn cartStatus={cartStatus}/>
            </header>
        )
    }
}

export default Navbar
