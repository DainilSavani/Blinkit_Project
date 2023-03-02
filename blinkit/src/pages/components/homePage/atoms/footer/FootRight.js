import React, { Component } from 'react';
import { SOCIAL_MEDIA_ICONS_CLASSES } from '../../../../../data/constData';

class FootRight extends Component {
    
    loadSocialMediaIcons = () => SOCIAL_MEDIA_ICONS_CLASSES.map((icon, option) => <a key={option} href='#' className={icon} />)

    render() {
        return (
            <div className='footRight'>
                {this.loadSocialMediaIcons()}
            </div>
        )
    }
}

export default FootRight
