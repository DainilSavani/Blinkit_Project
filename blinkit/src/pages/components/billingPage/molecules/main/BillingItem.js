import React, { Component} from 'react';
import BillItemDetail from '../../atoms/main/BillItemDetail';
import BillItemBtns from '../../atoms/main/BillItemBtns';
import './billingItem.scss';

export class BillingItem extends Component {

    loadBillingItem = (props) => props.vegetableItems.map((billingItem, itemIndex) => {
            if (billingItem.count>0 && billingItem.name.toLowerCase().includes(props.searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={billingItem.src} alt={billingItem.name} />
                    <BillItemDetail billingItem={billingItem} />
                    <BillItemBtns {...props} billingItem={billingItem} itemIndex={itemIndex} />
                </div>
            }
        });

    render() {
        return <div className='billingItemContainer'>
            {this.loadBillingItem(this.props)}
        </div>
    }
}

export default BillingItem
