import React, { Component } from 'react';

// components
import { FooterMid } from './atoms';
import { FooterRight } from './atoms';

// style
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                <div className="footerLeft">
                    © Blink Commerce Private Limited (formerly known as Grofers<br /> India Private Limited), 2016-2023
                </div>
                <FooterMid />
                <FooterRight />
            </section>
        )
    }
}

export default React.memo(Footer);
