/**
 * Created by amit on 4/24/18.
 */

import express from 'express';
import cors from "cors";
import React from 'react';
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux';
import {push} from 'react-router-redux';
import {matchPath, StaticRouter,Switch} from 'react-router-dom';
import serialize from "serialize-javascript";

import configureStore, {history} from '../shared/config';
import {App, routes} from '../shared';
import "source-map-support/register";
import Html from './Html'


const port = process.env.PORT || 5000;
const server = express();
server.use(cors());
server.use(express.static('public'));


server.get("*", (req, res, next) => {
    console.log(1111,req.url)
    const {store, sagaMiddleware} = configureStore();
    // console.log(req.url);
    // We created an array of promises because we need our state to be initialized after all the actions are performed
    const promises = routes.reduce((total, route) => {
        const matched = matchPath(req.url, route) !== null;
      //  console.log('matched ---------', matched, req.url);
        const condition =
            matched &&      // check if requested url exists in routes or not
            route.component &&                // check if there exist any component on the requested route
            route.component.initialAction;    // check if there exist any static initializing function in component
        // console.log("api url condition :: ", condition);
        // console.log('initial action   --- ', route.component.initialAction({url: req.url}));

        if (condition) {console.log("req.urlreq.url", req.url);
            // This sync the requested url with the redux Store routes.
            total.push(Promise.resolve(store.dispatch(push(req.url))));
            // We call the initialAction of the component containing requested url, so that it can initialize the state
            // Catch this action in reducer and change the app state.
            // total.push(Promise.resolve(store.dispatch(route.component.initialAction({url: req.url}))));

            // const responsePromise = route.component.initialAction({url: req.url, store});
            route.component.initialAction({url: req.url, store});

            // total.push(Promise.resolve(responsePromise));
            
        }

        return total;
    }, []);     // Default value []

    // Wait for sagas to finish.
    promises.push(Promise.resolve(sagaMiddleware.done));

    Promise.all(promises).then(() => {
        // When all promises are completed
        console.log('Resolved GET STATE --------', new Date(), store.getState());
        const context = {history};
        const markup = renderToString(
            <Provider store={store}>
            
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
               
            </Provider>
        );
        const initialData = store.getState();       // Initialized data which we got from resolving our promises.

        // TODO : Fetch relevant data from the initialData here and pass it in the Html Function. Example below
        res.send(Html({title: "", body: markup, initialData: serialize(initialData)}));

    }).catch(next);
});

server.listen(port, () => {
    console.log(`Serving at http://localhost:${port}`);
});

