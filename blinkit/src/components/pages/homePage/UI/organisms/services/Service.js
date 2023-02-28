import React, { Component } from 'react';
import ServiceBox from '../../molecules/service/ServiceBox';

class Service extends Component {
    constructor(props) {
        super(props)
        this.serviceData = [
            {
                name: 'Superfast Delivery',
                img: '/images/services/10_minute_delivery.avif',
                desc: 'Get your order delivered to your doorstep at the eraliest from dark stores near you.',
                alt: 'superfast delivery'
            }, {
                name: 'Best Prices & Offers',
                img: '/images/services/Best_Prices_Offers.avif',
                desc: 'Best price destination with offers directly from the manufacturers.',
                alt: 'best prices & offers'
            }, {
                name: 'Wide Assortment',
                img: '/images/services/Wide_Assortment.avif',
                desc: 'Choose from 5000+ products across food, personal care, house hold & other categories.',
                alt: 'wide assortment'
            }
        ]
    }

    render() {
        return (
            <section className='service'>
                {
                    this.serviceData.map((service, index) => <ServiceBox key={index} service={service}></ServiceBox>)
                }
            </section>
        )
    }
}

export default Service
