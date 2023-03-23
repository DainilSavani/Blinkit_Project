import { createStore } from 'redux';

// reducer
import reducer from './reducer';

const store = createStore(reducer);

export default store;