import React, { Component } from 'react';

// constant
import { LOCATIONS } from '../helper/constData';

class LocationInput extends Component {
    loadLocations = () => LOCATIONS.map(location => <option key={location.value} value={location.value}>{location.name}</option>)
    render() {
        const { changeInput } = this.props;
        return (
            <select className='locationInput' name='locationInput' onChange={(event) => changeInput(event.target.value)}>
                {this.loadLocations()}
            </select>
        )
    }
}

export default LocationInput
