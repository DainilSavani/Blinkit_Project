import React, { Component } from 'react';

// helper functions
import { renderLocations } from '../helpers/renderLocations';

class LocationInput extends Component {
    constructor(props) {
        super(props)
        this.renderLocations = renderLocations();
    }

    render() {
        return (
            <select className='locationInput' name='locationInput'>
                { this.renderLocations }
            </select>
        )
    }
}

export default LocationInput
