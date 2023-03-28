import React, { Component } from 'react';

// helper function
import clearCartClickHandler from './helpers/BillSectionHeading.general';

// components
import DeliverySubHeading from './atoms';

class BillSectionSubHeading extends Component {
    render() {
        const { cartItemsCount, appSetState } = this.props;
        return (
            <div className='billSubHeading'>
                <DeliverySubHeading cartItemsCount={cartItemsCount} />
                <button className='clearCart' onClick={() => clearCartClickHandler(appSetState)}>Clear Cart</button>
            </div>
        )
    }
}

export default BillSectionSubHeading
