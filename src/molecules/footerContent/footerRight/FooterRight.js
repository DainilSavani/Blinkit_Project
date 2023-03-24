import React, { Component } from 'react';

// helper functions
import renderSocialMediaIcons from './helpers/renderSocialMediaIcons';

// style
import './footerRight.scss';

class FooterRight extends Component {
    constructor(props) {
        super(props)
        this.renderSocialMediaIcons = renderSocialMediaIcons();
    }
    render() {
        return (
            <div className='footerRight'>
                { this.renderSocialMediaIcons }
            </div>
        )
    }
}

export default FooterRight
