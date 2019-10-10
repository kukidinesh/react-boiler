/**
 * Created by amit on 4/24/18.
 */

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';    // to use connected router.

import configureStore, {history} from '../shared/config';
import App from '../shared/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');
const {store} = configureStore(window.__initialData__);

render(
    <Provider store={store}>
        <BrowserRouter context={{history}}>
            <App/>
        </BrowserRouter>
    </Provider>,
    target
);


//registerServiceWorker();

