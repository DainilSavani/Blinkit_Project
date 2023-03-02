import React, { Component } from 'react';
import { LOCATION } from '../../../../../data/constData';
import { changeInputLocation } from '../../../../../helperFunction/stateChangeFunctions';
import LocationInput from '../../atoms/header/LocationInput';
import './location.scss';

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: LOCATION[0].value
        }
        this.changeInputLocation = changeInputLocation.bind(this);
    }

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
