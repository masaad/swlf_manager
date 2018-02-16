import { combineReducers } from 'redux'; 
import userProfile from '../reducers/UserProfile'

export const initializeReducers = asyncReducers => {
    combineReducers({userProfile});
}

export const injectReducer = (store, { key, reducer }) => { 
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer; 
    store.replaceReducer(initializeReducers(store.asyncReducers));
}; 

export default initializeReducers;