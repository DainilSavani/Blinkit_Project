import React, { PureComponent } from 'react';
import Service from '../UI/organisms/services/Service';
import About from '../UI/organisms/services/About';
import './serviceTemplate.scss';

class ServiceTemplate extends PureComponent {
    render() {
        return (
            <>
                <Service />
                <About />
            </>
        )
    }
}

export default ServiceTemplate
