import React, { Component } from 'react'

class ItemDetail extends Component {
    render() {
        const {name, weight} = this.props;
        const itemWeight = weight>=1 ? weight+"kg" : (weight*1000)+"g";
        return (
            <>
                <div className="name">{name}</div>
                <div className="weight">{itemWeight}</div>
            </>
        )
    }
}

export default ItemDetail
