import React, { Component } from 'react';

// components
import BillSectionSubHeading from '../billSectionSubHeading';

// style
import './billSectionHeading.scss';

class BillSectionHeading extends Component {
    render() {
        return (
            <>
                <header className="billSectionHeading">Place Order</header>
                <BillSectionSubHeading {...this.props} />
            </>
        )
    }
}

export default BillSectionHeading;