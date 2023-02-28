import React, { Component } from 'react'

class Button extends Component {
    render() {
        const {clsName, value, index, isIncrease} = this.props;
        if (value)
            return <button className={clsName} onClick={() => {
                if (isIncrease)
                    value.addItem(index);
                else
                    value.decreaseItem(index);
            }}>{this.props.children}</button>
        else
        return <button className={clsName}>{this.props.children}</button>
    }
}

export default Button
