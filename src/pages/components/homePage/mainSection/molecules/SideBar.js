import React, { Component } from 'react';
import { SIDEBAR_CATEGORIES } from '../../../../../data/constData';
import SideBarItem from './atoms/SideBarItem';
import './sideBar.scss';

function SideBar() {

    const loadSideBarItems = () => SIDEBAR_CATEGORIES.map((item, index) => <SideBarItem key={index} sideItem={item} index={index}></SideBarItem>)

    return (
        <aside className='cat'>
            {loadSideBarItems()}
        </aside>
    )
}

export default SideBar
