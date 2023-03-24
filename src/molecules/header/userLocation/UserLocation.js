import React, { Component } from 'react';

// components
import LocationInput from './atoms';

// style
import './userLocation.scss';

class UserLocation extends Component {
    render() {
        return (
            <div className='location'>
                <h1 className='loacationHeading'>Delivery in 10 minutes</h1>
                <LocationInput />
            </div>
        )
    }
}

export default React.memo(UserLocation)