import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';

// constants
import { API } from './constants/app.general';

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
      cartDetails: {}
    }
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    axios.get(API)  //fetching data through json server
      .then(response => stateSetter(this.setState, response.data))
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
          } />
          <Route path='/confirmation' element={
            <OrderConfirmationPage
              cartDetails={this.state.cartDetails}
              appSetState={this.setState}
            />
          } />
        </Routes>
      </>
    )
  }
}

export default App
