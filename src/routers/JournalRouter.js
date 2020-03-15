import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import JournalHeader from '../Components/JournalHeader';
import JournalHome from '../Components/JournalHome';
import searchPage from '../Components/SearchPage';
import CatalogueDashboard from '../Components/CatalogueDashboard';
import LoginPage from '../Components/LoginPage';

export const history = createBrowserHistory();

const JournalRouter = () => (
    <Router history={history}>
        <div>
            <JournalHeader />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/home" component={JournalHome} />
                <Route path="/search" component={searchPage} />
                <Route path="/catalogue" component={CatalogueDashboard} />
            </Switch>
        </div>
    </Router>
)

export default JournalRouter;