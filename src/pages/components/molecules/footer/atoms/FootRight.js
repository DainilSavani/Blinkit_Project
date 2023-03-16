import React from 'react';
import { SOCIAL_MEDIA_ICONS_CLASSES } from '../../../../../data/constData';

function FootRight() {

    const loadSocialMediaIcons = () => SOCIAL_MEDIA_ICONS_CLASSES.map((icon, option) => <a key={option} href='#' className={icon} />)

    return (
        <div className='footRight'>
            {loadSocialMediaIcons()}
        </div>
    )
}

export default FootRight