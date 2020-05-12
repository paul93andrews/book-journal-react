import React from 'react';
import styled from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import JournalHome from '../Components/JournalHome';
import searchPage from '../Components/SearchPage';
import CatalogueDashboard from '../Components/CatalogueDashboard';
import LoginPage from '../Components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const ContentContainer = styled.main`
    @media (min-width: 860px) {
        display: flex;
    }
    position: relative;
`

const JournalRouter = () => (
    <Router history={history}>
        <ContentContainer>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/home" component={JournalHome} />
                <PrivateRoute path="/search" component={searchPage} />
                <PrivateRoute path="/catalogue" component={CatalogueDashboard} />
            </Switch>
        </ContentContainer>
    </Router>
)

export default JournalRouter;