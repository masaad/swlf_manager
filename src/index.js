import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../src/css/index.css'
import { Container as App } from '../src/components/App/sync';
import registerServiceWorker from './registerServiceWorker';
import createReduxStore from './store/createStore'

const store = createReduxStore({});
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, MOUNT_NODE);
registerServiceWorker();
