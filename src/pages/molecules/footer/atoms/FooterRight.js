import React, { Component } from 'react';

// constant
import { SOCIAL_MEDIA_ICONS_CLASSES } from './constData';

class FooterRight extends Component {
    
    loadSocialMediaIcons = () => SOCIAL_MEDIA_ICONS_CLASSES.map((icon, option) => <a key={option} href='#' className={icon} />)

    render() {
        return (
            <div className='footerRight'>
                {this.loadSocialMediaIcons()}
            </div>
        )
    }
}

export default FooterRight
