import React, { Component } from 'react'

class Option extends Component {
    render() {
        const {name, value} = this.props.item;
        return (
            <option value={value}>{name}</option>
        )
    }
}

export default Option
