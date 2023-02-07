import React, { Component } from 'react'

// helper functions
import renderDownloadAppBtns from './helpers/renderDownloadAppBtns';

// style
import './downloadApp.scss';

class DownloadApp extends Component {
    constructor(props) {
        super(props)   
        this.renderDownloadAppBtns = renderDownloadAppBtns();
    }

    render() {
        return (
            <div className='trackOrderDownloadApp'>
                <h3>track your order</h3>
                <p>download ios or android app to track your order live</p>
                { this.renderDownloadAppBtns }
            </div>
        )
    }
}

export default DownloadApp
