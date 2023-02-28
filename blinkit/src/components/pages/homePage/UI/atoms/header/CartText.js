import React, { Component } from 'react';
import { ValueConsumer } from '../../../Context';

class CartText extends Component {
    render() {
        return (
            <ValueConsumer> 
                {value => {
                    if (value.cart.count === 0) {
                        return <div className='cartBtnTxt'>My Cart</div>
                    } else {
                        return  <div className='cartBtnTxt'>
                            <p>{value.cart.count} items</p>
                            <p>₹{value.cart.total}</p>
                        </div>
                    }
                }}
            </ValueConsumer>
        )
    }
}

export default CartText
