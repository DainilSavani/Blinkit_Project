import React, { Component } from 'react';
import Time from '../../atoms/mainContent/Time';
import ItemDetail from '../../atoms/mainContent/ItemDetail';
import './itemTimeDetail.scss';

class ItemTimeDetail extends Component {
    render() {
        const {name, weight} = this.props;
        return (
            <>
                <Time />
                <ItemDetail name={name} weight={weight} />
            </>
        )
    }
}

export default ItemTimeDetail
