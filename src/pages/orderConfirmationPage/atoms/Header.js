import React, { Component } from 'react'

// style
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header className='navBar'>
                <img id="logo" name="logo" src="/images/logo.webp" alt="logo"/>
            </header>
        )
    }
}

export default Header
