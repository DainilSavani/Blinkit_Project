import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { connect } from 'react-redux';

// redux store
import store from './redux/store';

// components
import HomePage from './pages/homePage';
import BillingPage from './pages/billingPage';
import OrderConfirmationPage from './pages/orderConfirmationPage';

import { fetchVegetableItems } from './redux/actions';


class App extends Component {
  componentDidMount() {
    this.props.fetchVegetableItems();
  }
  render() {
    return (
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/checkout' element={<BillingPage />} />
          <Route path='/confirmation' element={<OrderConfirmationPage />} />
        </Routes>
      </Provider>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchVegetableItems: () => dispatch(fetchVegetableItems())
  }
}

export default connect(null, mapDispatchToProps)(App);