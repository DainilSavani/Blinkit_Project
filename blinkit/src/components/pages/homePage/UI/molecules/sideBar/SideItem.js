import React, { Component } from 'react';
import SideItemImg from '../../atoms/sideBar/SideItemImg';

class SideItem extends Component {
    render() {
        const {item, index} = this.props;
        return (
            <div className='subCat'>
                <SideItemImg item={item} index={index} />
                <p>{item.name}</p>
            </div>
        )
    }
}

export default SideItem;
