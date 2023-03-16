import React from 'react';
import { LOCATION } from '../../../../../../data/constData';

function LocationInput(props) {
    const { location, setLocation } = props;
    const loadLocations = () => LOCATION.map(location => <option key={location.value} value={location.value}>{location.name}</option>)

    return (
        <select className='locationInput' name='locationInput' value={location} onChange={(event) => setLocation(event.target.value)}>
            {loadLocations()}
        </select>
    )
}

export default LocationInput
