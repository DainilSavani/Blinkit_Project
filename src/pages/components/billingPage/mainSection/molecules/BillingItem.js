import React, { Component} from 'react';
import BillItemDetail from './atoms/BillItemDetail';
import BillItemBtns from './atoms/BillItemBtns';
import './billingItem.scss';

export class BillingItem extends Component {

    loadBillingItem = (props) => {
        const {vegetableItems, searchBarValue} = props.state;
        return vegetableItems.map((billingItem, itemIndex) => {
            if (billingItem.count>0 && billingItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={billingItem.src} alt={billingItem.name} />
                    <BillItemDetail billingItem={billingItem} />
                    <BillItemBtns {...props} billingItem={billingItem} itemIndex={itemIndex} />
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

export default BillingItem
