import React, { Component } from 'react';

// style
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="https://blinkit.com/9f644712ea8611916099.png" alt="logo" />
            </header>
        )
    }
}

export default Header