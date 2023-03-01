import React, { PureComponent } from 'react';
import { OUR_SERVICES_DATA } from '../../../../../../data/constData';
import ServiceBox from '../../atoms/services/ServiceBox';
import './ourServices.scss'

class OurServices extends PureComponent {

    loadOurServices = () => OUR_SERVICES_DATA.map((service, index) => <ServiceBox key={index} service={service}></ServiceBox>)

    render() {
        return (
            <>
                <section className='service'>
                    {this.loadOurServices()}
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

export default OurServices
