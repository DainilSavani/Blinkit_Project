import React, { Component } from 'react';
import Navbar from '../UI/organisms/Navbar';
import List from '../UI/molecules/header/List';

class HeaderTemplate extends Component {
    render() {
        return (
            <>
                <Navbar />
                <List />
            </>
            
        )
    }
}

export default HeaderTemplate
