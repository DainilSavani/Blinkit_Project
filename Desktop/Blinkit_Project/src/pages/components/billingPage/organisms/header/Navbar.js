import React, { Component } from 'react';
import Location from './molecules/Location';
import {SearchBar} from './molecules/atoms/SearchBar';
import CartBtn from './molecules/CartBtn';
import './navbar.scss';

export class Navbar extends Component {
    render() {
        const {cartStatus} = this.props.state;
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="/images/logo.webp" alt="logo"/>
                <Location />
                <SearchBar {...this.props} />
                <a id="loginLink">Login</a>
                <CartBtn cartStatus={cartStatus}/>
            </header>
        )
    }
}

export default Navbar
