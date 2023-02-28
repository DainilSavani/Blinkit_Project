import React, { Component } from 'react';
import Button from '../Button';

class Discount extends Component {
    render() {
        const {discount} = this.props;
        return (
            <Button clsName='discount'>{discount}</Button>
        )
    }
}

export default Discount
