import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

// redux store
import store from './redux/store';

// components
import BillingPage from './pages/billingPage';
import OrderConfirmationPage from './pages/orderConfirmationPage';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/checkout" element={<BillingPage />} />
        <Route path='/confirmation' element={<OrderConfirmationPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
