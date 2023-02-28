import React, { Component } from 'react';
import Option from '../Option';

class LocationInput extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.optionValues = [
            {
                name: "Bangaluru, India",
                value: "ban"
            }, {
                name: "Delhi, India",
                value: "del"
            }, {
                name: "Bombay, India",
                value: "bom"
            }
        ]
    }

    render() {
        const {changeInput} = this.props;
        return (
            <select name='location' ref={this.inputRef} onChange={() => changeInput()}>
                {
                    this.optionValues.map(item => <Option key={item.value} item={item}/>)
                }
            </select>
        )
    }
}

export default LocationInput
