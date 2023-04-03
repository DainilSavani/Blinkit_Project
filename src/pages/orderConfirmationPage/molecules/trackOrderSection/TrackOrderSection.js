import React, { Component } from 'react'

// components
import DownloadApp from '../downlodApp';

// style
import './trackOrderSection.scss';

class TrackOrderSection extends Component {
    render() {
        return (
            <div className='trackOrder'>
                <img className='trackOrderImage' src='https://blinkit.com/careers/sites/default/files/2021-12/deliver-desktop-masthead.png' />
                <DownloadApp />
            </div>
        )
    }
}

export default TrackOrderSection
