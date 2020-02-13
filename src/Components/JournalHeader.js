import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const JournalHeader = () => {
    return <header>
        <h1>Book Journal</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/search" activeClassName="is-active">Search</NavLink>
    </header>
}

export default JournalHeader;