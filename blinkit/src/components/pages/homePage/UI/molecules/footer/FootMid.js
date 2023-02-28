import React, { Component } from 'react'

class FootMid extends Component {
    constructor(props) {
        super(props)
        this.btns = [
            {
                src: '/images/footer/appstore.webp',
                alt: 'app store'
            }, {
                src: '/images/footer/playstore.webp',
                alt: 'play store'
            }
        ]
    }

    render() {
        return (
            <div className="footMiddle">
                <p>Download App</p>
                {
                    this.btns.map((btns, index) => <img key={index} src={btns.src} alt={btns.alt} />)
                }
            </div>
        )
    }
}

export default FootMid;
