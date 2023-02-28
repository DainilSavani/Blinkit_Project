import React, { Component } from 'react';
import LocationInput from '../../atoms/header/LocationInput';
import './location.scss';

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: "ban"
        }
        this.input = React.createRef();
    }

    changeInput = () => {
        this.setState(() => {
            this.state.location = this.input.current.inputRef.current.value;
        });
    };

    render() {
        return (
            <div className='location'>
                <h1>Delivery in 10 minutes</h1>
                <LocationInput changeInput={this.changeInput} ref={this.input} />
            </div>
        )
    }
}

export default Location
