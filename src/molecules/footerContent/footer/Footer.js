import React, { Component } from 'react';

// components
import FooterLeft from './atoms';
import FooterMid from '../footerMid';
import FooterRight from '../footerRight';

// style
import './footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className='footer'>
                <FooterLeft />
                <FooterMid />
                <FooterRight />
            </section>
        )
    }
}

export default React.memo(Footer);
