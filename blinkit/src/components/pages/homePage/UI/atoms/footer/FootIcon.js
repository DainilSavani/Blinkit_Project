import React, { Component } from 'react'

class FootIcon extends Component {
    render() {
        const {href, cls} = this.props;
        return (
            <a href={href} className={cls} />
        )
    }
}

export default FootIcon
