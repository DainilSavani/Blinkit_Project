import React, { Component} from 'react';

// components
import { BillItemDetail } from './atoms';
import { BillItemBtns } from './atoms';

// style
import './billingItem.scss';

export class BillingItem extends Component {

    loadBillingItem = (props) => {
        const { vegetableItems, searchBarValue } = props;
        return vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.count>0 && vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={vegetableItem.src} alt={vegetableItem.name} />
                    <BillItemDetail vegetableItem={vegetableItem} />
                    <BillItemBtns {...props} vegetableItem={vegetableItem} itemIndex={itemIndex} />
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
