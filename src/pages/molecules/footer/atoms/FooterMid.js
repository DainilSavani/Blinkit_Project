import React, { Component } from 'react';

// constant
import { DOWNLOAD_APP_BUTTONS } from './constData';

class FooterMid extends Component {
    
    loadFooterButtons = () => DOWNLOAD_APP_BUTTONS.map((btns, index) => <img key={index} src={btns.src} alt={btns.alt} />)

    render() {
        return (
            <div className="footerMid">
                <p>Download App</p>
                {this.loadFooterButtons()}
            </div>
        )
    }
}

export default FooterMid;
