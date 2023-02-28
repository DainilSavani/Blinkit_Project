import React, { Component } from 'react';
import ItemPriceValue from '../../atoms/mainContent/ItemPriceValue';
import Button from '../../atoms/Button';
import { ValueConsumer } from '../../../Context';
import './itemPrice.scss';

class ItemPrice extends Component {
    render() {
        const {item, index} = this.props;
        return (
            <div className="price">
                <ItemPriceValue newPrice={item.new_price} oldPrice={item.old_price} />
                <ValueConsumer >
                    {value => {
                        if (item.count === 0)
                            return <Button clsName='addBtn' value={value} index={index} isIncrease={true}>ADD</Button>
                        else
                            return <div className="billItemBtn">
                                <Button clsName='decreaseItem' value={value} index={index} isIncrease={false}>-</Button>
                                <Button clsName='itemValue'>{item.count}</Button>
                                <Button clsName='increaseItem' value={value} index={index} isIncrease={true}>+</Button>
                            </div>
                    }}
                </ValueConsumer>
            </div>
        )
    }
}

export default ItemPrice
