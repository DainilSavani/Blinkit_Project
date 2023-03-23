import React, { Component } from 'react'

// components
import DownloadAppBtn from './atoms';

// style
import './trackOrderSection.scss';

class TrackOrderSection extends Component {
    render() {
        return (
            <div className='trackOrder'>
                <img className='trackOrderImage' src='/images/track your order.webp' />
                <div className='trackOrderDownloadApp'>
                    <h3>track your order</h3>
                    <p>download ios or android app to track your order live</p>
                    <DownloadAppBtn />
                </div>
            </div>
        )
    }
}

export default TrackOrderSection
