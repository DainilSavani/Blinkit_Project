import React, { Component} from 'react';
import { connect } from 'react-redux';

// components
import { BillItemDetail } from './atoms';
import { BillItemBtns } from './atoms';

// style
import './billingItem.scss';

export class vegetableItem extends Component {

    loadvegetableItem = ({ vegetableItems, searchBarValue }) => {
        return vegetableItems.map((vegetableItem, itemIndex) => {
            if (vegetableItem.count>0 && vegetableItem.name.toLowerCase().includes(searchBarValue.toLowerCase())) {
                return <div key={itemIndex} className='billingItem'>
                    <img src={vegetableItem.src} alt={vegetableItem.name} />
                    <BillItemDetail vegetableItem={vegetableItem} />
                    <BillItemBtns vegetableItem={vegetableItem} itemIndex={itemIndex} />
                </div>
            }
        });
    }

    render() {
        return <div className='vegetableItemContainer'>
            {this.loadvegetableItem(this.props)}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        vegetableItems: state.vegetableItems,
        searchBarValue: state.searchBarValue
    }
}

export default connect(mapStateToProps, null)(vegetableItem)
