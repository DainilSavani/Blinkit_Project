import React, { Component } from 'react'

class ItemSourcedTime extends Component {
    render() {
        return (
            <div className='itemSourcedTime'>
                <img className='sourcedIcon' src="https://cdn.grofers.com/assets/ui/fresh_icon.png" alt="" />
                <p>Sourced at 5 AM</p>
            </div>
        )
    }
}

export default ItemSourcedTime