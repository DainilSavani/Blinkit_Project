import React, { Component} from 'react';
import BillItemDetail from './atoms/BillItemDetail';
import BillItemBtns from './atoms/BillItemBtns';
import { connect } from 'react-redux';
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
        vegetableItems: state.vegetableData,
        searchBarValue: state.searchBarValue
    }
}

export default connect(mapStateToProps, null)(vegetableItem)
