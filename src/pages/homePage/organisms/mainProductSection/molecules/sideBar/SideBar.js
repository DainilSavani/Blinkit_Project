import React, { Component } from 'react';

// constants
import SIDEBAR_CATEGORIES from './constants/sideBarConstants';

// components
import SideBarItem from './atoms';

// style
import './sideBar.scss';

const renderSideBarCategories = () =>
    SIDEBAR_CATEGORIES.map((item, index) =>
        <SideBarItem key={index} sideItem={item} index={index} />
    )

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.renderSideBarCategories = renderSideBarCategories();
    }

    render() {
        return (
            <aside className='cat'>
                {this.renderSideBarCategories}
            </aside>
        )
    }
}

export default React.memo(SideBar);
