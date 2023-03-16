import React, { useState } from 'react';
import { LOCATION } from '../../../../../data/constData';
import LocationInput from './atoms/LocationInput';
import './location.scss';

function Location() {
    const [location, setLocation] = useState(LOCATION[0].value)  // setting default location
    return (
        <div className='location'>
            <h1 className='loacationHeading'>Delivery in 10 minutes</h1>
            <LocationInput location={location} setLocation={setLocation} />
        </div>
    )
}

export default Location
