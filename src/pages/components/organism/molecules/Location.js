import React, { Component } from 'react';

// components
import { LocationInput } from './atoms';

// constant
import { LOCATIONS } from './helper/constData';

// style
import './style/location.scss';

class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: LOCATIONS[0].value
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