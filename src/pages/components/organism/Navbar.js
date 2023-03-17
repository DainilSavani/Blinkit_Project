import React, { Component } from 'react';

// components
import { Location } from './molecules';
import { SearchBar } from './molecules/atoms';
import { CartBtn } from './molecules';

// style
import './style/navbar.scss';

export class Navbar extends Component {
    render() {
        const { cartDetails, searchVegetableHandler } = this.props;
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="/images/logo.webp" alt="logo"/>
                <Location />
                <SearchBar searchVegetableHandler={searchVegetableHandler} />
                <a id="loginLink">Login</a>
                <CartBtn cartDetails={cartDetails}/>
            </header>
        )
    }
}

export default Navbar
