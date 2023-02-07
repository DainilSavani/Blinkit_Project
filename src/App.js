import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

// constants
import CART_DETAILS from './constants/cartDetailsConstant';

// helper functions
import { stateSetter, dataFetchError } from './helpers/app.general';

// components
import HomePage from "./pages/homePage";
import BillingPage from './pages/billingPage';
import OrderConfirmationPage from './pages/orderConfirmationPage';


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetableItems: [],
      cartDetails: CART_DETAILS
    }
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    fetch('http://localhost:5000/VEGETABLE_ITEMS')  //fetching data through json server
      .then(response => response.json())
      .then(result => stateSetter(this.setState, result))
      .catch(dataFetchError);
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={
            <HomePage
              vegetableItems={this.state.vegetableItems}
              cartDetails={this.state.cartDetails}
              appSetState={this.setState} 
            />
          } />
          <Route path="/checkout" element={
            <BillingPage
              vegetableItems={this.state.vegetableItems}
              cartDetails={this.state.cartDetails}
              appSetState={this.setState} 
            />
          }/>
          <Route path='/confirmation' element={
            <OrderConfirmationPage
              cartDetails={this.state.cartDetails}
            />
          }/>
        </Routes>
      </>
    )
  }
}

export default App
