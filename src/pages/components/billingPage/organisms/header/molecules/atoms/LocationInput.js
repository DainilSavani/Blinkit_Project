import React, { Component } from 'react';
import { LOCATION } from '../../../../../../../data/constData';

class LocationInput extends Component {

    loadLocations = () => LOCATION.map(location => <option key={location.value} value={location.value}>{location.name}</option>)
    
    render() {
        const {changeInput} = this.props;
        return (
            <select className='locationInput' name='locationInput' onChange={(event) => changeInput(event.target.value)}>
                {this.loadLocations()}
            </select>
        )
    }
}

export default LocationInput
