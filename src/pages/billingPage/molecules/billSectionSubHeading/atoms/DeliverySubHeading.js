import React, { Component } from 'react'

class DeliverySubHeading extends Component {
    render() {
        const { cartItemsCount } = this.props;
        return (
            <div className='delivery'>
                <h4>Delivery in 10 minutes</h4>
                <p>{cartItemsCount} items</p>
            </div>
        )
    }
}

export default DeliverySubHeading
