import React, { Component } from 'react';

class SideBarItem extends Component {
    render() {
        const { sideItem } = this.props;
        return (
            <div className='subCat'>
                <div className='subCatImg' >
                    <img src={sideItem.src} alt={sideItem.alt} />
                </div>
                <p>{sideItem.name}</p>
            </div>
        )
    }
}

export default SideBarItem;
