import React, { Component } from 'react';
import { LOCATION } from '../../../../../data/constData';
import LocationInput from './atoms/LocationInput';
import './location.scss';

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: LOCATION[0].value
        }
    }

    changeInputLocation = (location) => {
        this.setState({location: location});
    };

    render() {
        return (
            <div className='location'>
                <h1 className='loacationHeading'>Delivery in 10 minutes</h1>
                <LocationInput changeInput={this.changeInputLocation}/>
            </div>
        )
    }
}

export default Location
