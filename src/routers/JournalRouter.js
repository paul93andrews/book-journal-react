import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import JournalHome from '../Components/JournalHome';
import searchPage from '../Components/SearchPage';
import CatalogueDashboard from '../Components/CatalogueDashboard';
import LoginPage from '../Components/LoginPage';

import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const JournalRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/home" component={JournalHome} />
                <PrivateRoute path="/search" component={searchPage} />
                <PrivateRoute path="/catalogue" component={CatalogueDashboard} />
            </Switch>
        </div>
    </Router>
)

export default JournalRouter;