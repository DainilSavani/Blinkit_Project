import React from 'react'

function ServiceBox(props) {
    const { service } = props;
    return (
        <div className='serviceContainer'>
            <img className='serviceImg' src={service.img} alt={service.alt} />
            <h3>{service.name}</h3>
            <p className='serviceDescription'>{service.desc}</p>
        </div>
    )
}

export default ServiceBox

