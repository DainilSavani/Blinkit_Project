import React, { Component } from 'react';

// components
import ServicesBoxContainer from '../servicesBoxContainer';

// style
import './servicesSection.scss';

class ServicesSection extends Component {

    render() {
        return (
            <>
                <ServicesBoxContainer />
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
