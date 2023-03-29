import { createStore, applyMiddleware } from 'redux';

// reducer
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware());

export default store;