import React, { Component } from 'react'

class ServiceBox extends Component {
    render() {
        const {service} = this.props;
        return (
            <div className='serviceContainer'>
                <img className='serviceImg' src={service.img} alt={service.alt} />
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
            </div>
        )
    }
}

export default ServiceBox
