import React, { Component } from 'react'

class FootRight extends Component {
    constructor(props) {
        super(props)
        this.icons = ['fa fa-facebook', 'fa fa-twitter', 'fa fa-instagram', 'fa fa-linkedin']
    }

    render() {
        return (
            <div className='footRight'>
                {
                    this.icons.map((icon, option) => <a key={option} href='#' className={icon} />)
                }
            </div>
        )
    }
}

export default FootRight
