import React, { Component } from 'react';

class ItemImg extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className='itemImgDiv'>
                <img name={item.name} className='itemImg' src={item.src} alt={item.name} />
            </div>
        )
    }
}

export default ItemImg
