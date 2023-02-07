import { Provider } from 'react-redux';

// redux store
import store from './redux/store';

// components
import BillingPage from './pages/billingPage';

function App() {
  return (
    <Provider store={store}>
      <BillingPage />
    </Provider>  
  );
}

export default App;
