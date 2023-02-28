import React, { Component } from 'react';
import ItemDiscImg from '../../molecules/mainContent/ItemDiscImg';
import ItemTimeDetail from '../../molecules/mainContent/ItemTimeDetail';
import ItemPrice from '../../molecules/mainContent/ItemPrice';
import { ValueConsumer } from '../../../Context';
import './productItem.scss';

class ProductItem extends Component {
    render() {
        return (
            <section className='container'>
                <ValueConsumer >
                    {value => 
                        value.items.map((item, index) => {
                            if (item.name.toLowerCase().includes(value.search.toLowerCase()) && (value.type==='all' || value.type===item.type)) {
                                return <div key={index} className='item' id={'#item' + index}>
                                    <ItemDiscImg item={item} />
                                    <ItemTimeDetail name={item.name} weight={item.weight} />
                                    <ItemPrice index={index} item={item} />
                                </div>
                            }
                        })
                    }
                </ValueConsumer>
            </section>
        )
    }
}

export default ProductItem
