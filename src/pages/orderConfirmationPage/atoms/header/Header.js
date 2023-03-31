import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// style
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className='navBar'>
                <Link to='/' className='logoLink'>
                    <img id="logo" name="logo" src="https://blinkit.com/9f644712ea8611916099.png" alt="logo" />
                </Link>
            </header>
        )
    }
}

export default Header