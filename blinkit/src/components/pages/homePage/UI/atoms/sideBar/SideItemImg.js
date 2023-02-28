import React, { Component } from 'react'

class SideItemImg extends Component {
    render() {
        const {item, index} = this.props;
        const id = 'img' + index;
        return (
            <div className='subCatImg' id={id}>
                <img src={item.src} alt={item.alt} />
            </div>
        )
    }
}

export default SideItemImg
