import React, { Component } from 'react';
import SideItem from '../../molecules/sideBar/SideItem';
import './sidebar.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.sideItems = [
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
    }

    render() {
        return (
            <>
                {
                    this.sideItems.map((item, index) => <SideItem key={index} item={item} index={index}></SideItem> )
                }
            </>
        )
    }
}

export default Sidebar
