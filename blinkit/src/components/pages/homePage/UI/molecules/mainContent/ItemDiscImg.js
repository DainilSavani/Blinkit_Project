import React, { Component } from 'react';
import Discount from '../../atoms/mainContent/Discount';
import ItemImg from '../../atoms/mainContent/ItemImg';
import './itemDiscImg.scss';

class ItemDiscImg extends Component {
  render() {
    const {item} = this.props;
    return (
      <>
        <Discount discount={item.discount} />
        <ItemImg item={item} />
      </>
    )
  }
}

export default ItemDiscImg


