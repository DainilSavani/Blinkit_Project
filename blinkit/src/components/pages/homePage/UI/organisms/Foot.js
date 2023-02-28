import React, { PureComponent } from 'react';
import FootLeft from '../atoms/footer/FootLeft';
import FootMid from '../molecules/footer/FootMid';
import FootRight from '../molecules/footer/FootRight';
import './foot.scss';

class Foot extends PureComponent {
    render() {
        return (
            <section className='foot'>
                <FootLeft />
                <FootMid />
                <FootRight />
            </section>
        )
    }
}

export default Foot
