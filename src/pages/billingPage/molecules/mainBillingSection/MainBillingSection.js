import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// components
import BillSectionHeading from '../billSectionHeading';
import BillingItem from '../billingItem';
import EmptyCartSection from './atoms'

// style
import './MainBillingSection.scss';

class MainBillingSection extends Component {
    render() {
        const { cartDetails, searchBarValue } = this.props;
        const { itemsCount } = cartDetails;
        return (itemsCount)
            ? <section className='mainBillSection'>
                <BillSectionHeading />
                <BillingItem searchBarValue={searchBarValue} />
            </section>
            : <EmptyCartSection />
    }
}

const mapStateToProps = state => {
    return {
        cartDetails: state.cartDetails
    }
}

MainBillingSection.propTypes = {
    cartDetails: PropTypes.object,
    searchBarValue: PropTypes.string
}
MainBillingSection.defaultProps = {
    cartDetails: {},
    searchBarValue: ""
}

export default connect(mapStateToProps)(MainBillingSection);