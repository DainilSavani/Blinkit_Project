import React, { Component } from 'react';
import { SIDEBAR_CATEGORIES } from '../../../../../data/constData';
import SideBarItem from '../../atoms/sideBar/SideBarItem';
import './sideBar.scss';

class SideBar extends Component {

    loadSideBarItems = () => SIDEBAR_CATEGORIES.map((item, index) => <SideBarItem key={index} sideItem={item} index={index}></SideBarItem>)
    render() {
        return (
            <aside className='cat'>
                {this.loadSideBarItems()}
            </aside>
        )
    }
}

export default SideBar
