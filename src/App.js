import { Provider } from "react-redux";

// components
import OrderConfirmationPage from "./pages/orderConfirmationPage";

// redux
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <OrderConfirmationPage />
    </Provider>  
  );
}

export default App;
