import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import JournalHeader from '../Components/JournalHeader';
import JournalHome from '../Components/JournalHome';
import searchPage from '../Components/SearchPage';
import CatalogueDashboard from '../Components/CatalogueDashboard';

const JournalRouter = () => (
    <BrowserRouter>
        <div>
            <JournalHeader />
            <Switch>
                {/* <Route path="/" component={expenseDashboardPage} exact={true} /> */}
                <Route path="/" component={JournalHome} exact={true}/>
                <Route path="/search" component={searchPage} />
                <Route path="/catalogue" component={CatalogueDashboard} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default JournalRouter;