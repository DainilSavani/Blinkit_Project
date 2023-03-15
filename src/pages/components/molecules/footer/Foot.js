import React, { memo } from 'react';
import FootMid from './atoms/FootMid';
import FootRight from './atoms/FootRight';
import './foot.scss';

function Foot() {
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

export default memo(Foot);