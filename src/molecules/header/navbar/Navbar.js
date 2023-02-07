import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/' className='logoLink'>
                    <img id="logo" name="logo" src="https://blinkit.com/9f644712ea8611916099.png" alt="logo" />
                </Link>
                <UserLocation />
                <SearchBar {...this.props} />
                <a id="loginLink">Login</a>
                <Link to='/checkout'>
                    <CartBtn />
                </Link>
            </header>
        )
    }
}

export default Navbar