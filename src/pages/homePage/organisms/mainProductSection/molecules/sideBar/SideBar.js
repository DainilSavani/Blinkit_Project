import React, { Component } from 'react';

// components
import SideBarItem from './atoms';

// style
import './sideBar.scss';

const SIDEBAR_CATEGORIES = [
    {
        name: 'All',
        src: 'https://cdn.grofers.com/app/images/category/cms_images/icon/1489_1643613620694.png',
        alt: 'all'
    }, {
        name: 'Fresh Vegetables',
        src: 'https://cdn.grofers.com/66acfb51-c5fe-4718-a200-61efaf773556.png',
        alt: 'fresh vegetables'
    }, {
        name: 'Exotics',
        src: 'https://cdn.grofers.com/app/images/category/cms_images/icon/278_1678705041060.png',
        alt: 'exotics'
    }, {
        name: 'Seasonal',
        src: 'https://cdn.grofers.com/app/images/category/cms_images/icon/482_1678341687886.png',
        alt: 'seasonal'
    }, {
        name: 'Organic & Hydroponic',
        src: 'https://cdn.grofers.com/app/images/category/cms_images/icon/39_1677581549982.png',
        alt: 'organic'
    }, {
        name: 'Freshly Cut & Sprouts',
        src: 'https://cdn.grofers.com/app/images/category/cms_images/icon/395_1668582176947.png',
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
