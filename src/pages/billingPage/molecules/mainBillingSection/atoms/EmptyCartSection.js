import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EmptyCartSection extends Component {
    render() {
        return (
            <section className='emptyCartMainSection'>
                <img id='emptyCart' name='emptyCart' src='https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png' />
                <h3 className='emptyCartDisc'>You don't have any items in your cart</h3>
                <p className='emptyCartDisc'>Your favourite items are just a click away</p>
                <Link to='/' >
                    <button className='emptyCartBtn'>Start Shopping</button>
                </Link>
            </section>
        )
    }
}

export default EmptyCartSection