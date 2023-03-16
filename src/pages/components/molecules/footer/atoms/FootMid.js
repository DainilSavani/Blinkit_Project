import React from 'react';
import { DOWNLOAD_APP_BUTTONS } from '../../../../../data/constData';

function FootMid() {
    const loadFooterButtons = () => DOWNLOAD_APP_BUTTONS.map((btns, index) => <img key={index} src={btns.src} alt={btns.alt} />)
    return (
        <div className="footMiddle">
            <p>Download App</p>
            {loadFooterButtons()}
        </div>
    )
}

export default FootMid;