import React, { Component } from 'react';

// helper functions
import renderFooterButtons from './helpers/renderFooterButtons';

// style
import './footerMid.scss';

class FooterMid extends Component {
    constructor(props) {
        super(props)
        this.renderFooterButtons = renderFooterButtons();
    }
    render() {
        return (
            <div className="footerMid">
                <p>Download App</p>
                { this.renderFooterButtons }
            </div>
        )
    }
}

export default FooterMid;
