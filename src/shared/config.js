import {routerMiddleware} from 'react-router-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga';
import {createBrowserHistory, createMemoryHistory} from 'history';
import logger from 'redux-logger';

import allReducers from './reducers';
import rootSaga from './sagas';

let history;

if (typeof window === 'undefined')
    history = createMemoryHistory();
else
    history = createBrowserHistory();

export {history};

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(promise(), thunk, routerMiddleware(history), sagaMiddleware, logger);


// const store = createStore(
//     allReducers,
//     middleware
// );

const configureStore = preloadedState => {


    const store = createStore(
        allReducers,
        preloadedState,
        middleware
    );
    // return store;
    return {
        store: store,
        sagaMiddleware: sagaMiddleware.run(rootSaga),
    }
};


export default configureStore;
