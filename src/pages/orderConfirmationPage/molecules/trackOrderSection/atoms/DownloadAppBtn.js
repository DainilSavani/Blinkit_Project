import React, { Component } from 'react'

const DOWNLOAD_APP_BUTTONS = [
    {
        src: '/images/footer/appstore.webp',
        alt: 'app store'
    }, {
        src: '/images/footer/playstore.webp',
        alt: 'play store'
    }
]

class DownloadAppBtn extends Component {
    loadFooterButtons = () => DOWNLOAD_APP_BUTTONS.map((btns, index) => <img key={index} src={btns.src} alt={btns.alt} />)
    render() {
        return (
            <>
                {this.loadFooterButtons()} 
            </>
        )
    }
}

export default DownloadAppBtn
