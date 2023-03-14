import React from 'react';
import BillItemDetail from './atoms/BillItemDetail';
import BillItemBtns from './atoms/BillItemBtns';
import { useSelector } from 'react-redux';
import './billingItem.scss';

function BillingItem() {

    const loadVegetableItem = ({ vegetableItems, searchBarValue }) => {
        return vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.count > 0 && vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={vegetableItem.src} alt={vegetableItem.name} />
                    <BillItemDetail vegetableItem={vegetableItem} />
                    <BillItemBtns vegetableItem={vegetableItem} itemIndex={itemIndex} />
                </div>
            }
        });
    }

    return (
        <div className='vegetableItemContainer'>
            {loadVegetableItem(useSelector(state => state))}
        </div>
    )
}

export default BillingItem
