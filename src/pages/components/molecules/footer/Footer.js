import React, { PureComponent } from 'react';

// components
import { FooterMid } from './atoms';
import { FooterRight } from './atoms';

// style
import './style/footer.scss';

class Footer extends PureComponent {
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

export default Footer
