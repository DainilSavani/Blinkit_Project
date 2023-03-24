import React, { Component } from 'react'

// helper functions
import renderServicesData from './helpers/renderServicesDetails';

// style
import './servicesBoxContainer.scss';

class ServicesBoxContainer extends Component {
    constructor(props) {
        super(props)
        this.renderServicesData = renderServicesData();
    }
    render() {
        return (
            <section className='service'>
                { this.renderServicesData }
            </section>
        )
    }
}

export default ServicesBoxContainer
