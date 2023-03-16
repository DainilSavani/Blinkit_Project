import React from 'react';
import BillItemDetail from './atoms/BillItemDetail';
import BillItemBtns from './atoms/BillItemBtns';
import './billingItem.scss';

function BillingItem(props) {
    const loadBillingItem = () => {
        const { vegetableItems, searchBarValue } = props;
        return vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.count > 0 && vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={vegetableItem.src} alt={vegetableItem.name} />
                    <BillItemDetail vegetableItem={vegetableItem} />
                    <BillItemBtns {...props} vegetableItem={vegetableItem} itemIndex={itemIndex} />
                </div>
            }
        });
    }
    return (
        <div className='billingItemContainer'>
            {loadBillingItem()}
        </div>
    )
}

export default BillingItem