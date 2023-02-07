import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// components
import BillItemDetail from './atoms';
import BillItemBtns from '../billItemBtns';

// style
import './billingItem.scss';

class BillingItem extends Component {

    renderBillingItem = ({ vegetableItems, searchBarValue }) => 
        vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.count > 0 && vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return (
                    <div key={itemIndex} className='billingItem'>
                        <img src={vegetableItem.src} alt={vegetableItem.name} />
                        <BillItemDetail {...vegetableItem} />
                        <BillItemBtns vegetableItem={vegetableItem} itemIndex={itemIndex} />
                    </div>
                )
            }
        });

    render() {
        return <div className='billingItemContainer'>
            {this.renderBillingItem(this.props)}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        vegetableItems: state.vegetableItems
    }
}

BillingItem.propTypes = {
    vegetableItems: PropTypes.array,
    searchBarValue: PropTypes.string
}
BillingItem.defaultProps = {
    vegetableItems: [],
    searchBarValue: ""
}

export default connect(mapStateToProps)(BillingItem)