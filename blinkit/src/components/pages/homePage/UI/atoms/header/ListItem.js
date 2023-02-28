import React, { Component } from 'react'

class ListItem extends Component {
    render() {
        const {name} = this.props;
        return (
            <p>{name}</p>
        )
    }
}

export default ListItem
