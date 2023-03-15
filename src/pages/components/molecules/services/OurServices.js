import React, { memo } from 'react';
import { OUR_SERVICES_DATA } from '../../../../data/constData';
import ServiceBox from './atoms/ServiceBox';
import './ourServices.scss'

function OurServices() {

    const loadOurServices = () => OUR_SERVICES_DATA.map((service, index) => <ServiceBox key={index} service={service}></ServiceBox>)

    return (
        <>
            <section className='service'>
                {loadOurServices()}
            </section>
            <div className='about'>“Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India
                Private Limited) and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM”
                which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
            </div>
            <hr />
        </>
    )
}

export default memo(OurServices);

