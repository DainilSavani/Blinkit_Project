import React, { Component} from 'react';
import BillItemDetail from './atoms/BillItemDetail';
import BillItemBtns from './atoms/BillItemBtns';
import { connect } from 'react-redux';
import './billingItem.scss';

export class BillingItem extends Component {

    loadBillingItem = ({ vegetableItems, searchBarValue }) => {
        return vegetableItems.map((billingItem, itemIndex) => {
            if (billingItem.count>0 && billingItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={billingItem.src} alt={billingItem.name} />
                    <BillItemDetail billingItem={billingItem} />
                    <BillItemBtns billingItem={billingItem} itemIndex={itemIndex} />
                </div>
            }
        });
    }

    render() {
        return <div className='billingItemContainer'>
            {this.loadBillingItem(this.props)}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        vegetableItems: state.vegetableData,
        searchBarValue: state.searchBarValue
    }
}

export default connect(mapStateToProps, null)(BillingItem)
