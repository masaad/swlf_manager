import { createStore } from 'redux';
import { initializeReducers } from './reducers';

const createReduxStore = (initialState = {}) => {
    const store = createStore(initializeReducers, {});
    store.asyncReducers = {}; 

   return store;
}

export default createReduxStore;


