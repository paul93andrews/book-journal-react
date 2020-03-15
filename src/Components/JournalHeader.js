import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const JournalHeader = ({ startLogout }) => {
    return <header>
        <h1>Book Journal</h1>
        <NavLink to="/home" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/search" activeClassName="is-active">Search</NavLink>
        <NavLink to="/catalogue" activeClassName="is-active">Catalogue</NavLink>
        <button onClick={startLogout}>Log Out</button>
    </header>
}

// export default JournalHeader;
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(JournalHeader);