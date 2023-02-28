import React, { Component } from 'react';
import ListItem from '../../atoms/header/ListItem';
import Option from '../../atoms/Option';
import './list.scss';

class List extends Component {

    constructor(props) {
        super(props)
        this.list = ['Vegetables & Fruits', 'Dairy & Breakfast', 'Muchies', 'Cold Drinks & Juices', 'Instant & Frozen Food',
            'Tea, Coffee & Health Drinks', 'Bakery & Biscuits'];
        this.more = [{
            name: 'More',
            value: null
        }, {
            name: 'Atta, Rice & Dal',
            value: 1
        }, {
            name: 'Dry Fruits, Masala & Oil',
            value: 2
        }, {
            name: 'Sauces & Spreads', 
            value: 3
        }, {
            name: 'Organic & Premium', 
            value: 4
        }, {
            name: 'Cleaning Essentials', 
            value: 5
        }, {
            name: 'Baby Care',
            value: 6
        }, { 
            name: 'Home & Office',
            value: 7
        }, {
            name: 'Personal Care',
            value: 8
        }];
    }

    render() {
        return (
            <div className='list'>
                {
                    this.list.map((li, index) => <ListItem key={index} name={li} />)
                }
                <select placeholder='more' >
                    {
                        this.more.map((item, index) => <Option key={index} item={item}></Option>)
                    }
                </select>
            </div>
        )
    }
}

export default List
