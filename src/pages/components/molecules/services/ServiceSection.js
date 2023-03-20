import React, { PureComponent } from 'react';

// component
import ServiceBox from './atoms';

// style
import './servicesSection.scss';

const SERVICES_SECTION_DATA = [
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

class ServicesSection extends PureComponent {

    loadServices = () => SERVICES_SECTION_DATA.map((service, index) => <ServiceBox key={index} service={service}></ServiceBox>)

    render() {
        return (
            <>
                <section className='service'>
                    {this.loadServices()}
                </section>
                <div className='about'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India
                    Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM”
                    which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                </div>
                <hr />
            </>
        )
    }
}

export default React.memo(ServicesSection);
