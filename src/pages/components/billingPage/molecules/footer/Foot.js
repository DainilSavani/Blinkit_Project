import React, { PureComponent } from 'react';
import FootMid from './atoms/FootMid';
import FootRight from './atoms/FootRight';
import './foot.scss';

class Foot extends PureComponent {
    render() {
        return (
            <section className='foot'>
                <div className="footLeft">
                    © Blink Commerce Private Limited (formerly known as Grofers<br /> India Private Limited), 2016-2023
                </div>
                <FootMid />
                <FootRight />
            </section>
        )
    }
}

export default Foot
