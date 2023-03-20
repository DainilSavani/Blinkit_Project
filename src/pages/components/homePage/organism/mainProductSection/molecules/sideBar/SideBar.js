import React, { Component } from 'react';

// components
import SideBarItem from './atoms';

// style
import './sideBar.scss';

const SIDEBAR_CATEGORIES = [
    {
        name: 'All',
        src: './images/categories/all+fresh.webp',
        alt: 'all'
    }, {
        name: 'Fresh Vegetables',
        src: './images/categories/all+fresh.webp',
        alt: 'fresh vegetables'
    }, {
        name: 'Exotics',
        src: './images/categories/exotics.webp',
        alt: 'exotics'
    }, {
        name: 'Seasonal',
        src: './images/categories/seasonal.webp',
        alt: 'seasonal'
    }, {
        name: 'Organic & Hydroponic',
        src: './images/categories/organic.jpeg',
        alt: 'organic'
    }, {
        name: 'Freshly Cut & Sprouts',
        src: './images/categories/freshly cut.webp',
        alt: 'freshly cut'
    }
]

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

export default React.memo(SideBar);
