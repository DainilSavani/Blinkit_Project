import React, { Component } from 'react';
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

// components
import UserLocation from '../userLocation';
import SearchBar from '../searchBar';
import CartBtn from '../cartBtn';

// style
import './navbar.scss';

class Navbar extends Component {
    render() {
        const { cartDetails, parentSetState } = this.props;
        return (
            <header className='navBar'>
                <Link to='/' className='logoLink'>
                    <img id="logo" name="logo" src="https://blinkit.com/9f644712ea8611916099.png" alt="logo" />
                </Link>
                <UserLocation />
                <SearchBar parentSetState={parentSetState} />
                <a id="loginLink">Login</a>
                <Link to='/checkout'>
                    <CartBtn {...cartDetails} />
                </Link>
            </header>
        )
    }
}

Navbar.propTypes = {
    cartDetails: PropTypes.object,
    parentSetState: PropTypes.func
}

export default Navbar