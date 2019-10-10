import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history } from './config';
import routes from './routes';

import Header from './components/header'
import Footer from './components/footer'

const App = (props) => (
    <div className="app-container">
        <Header/>
        <Switch>
            <Router history={history} >
                <div>
                    {
                        routes.map( (route, index) =>
                        <Route key={index} exact={route.exact} path={route.path} component={route.component}/>)
                    }
                </div>
            </Router>
        </Switch>
        <Footer/>
    </div>
);

export default App;
