import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import JournalHeader from '../Components/JournalHeader';


export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    //rest gives us access to all the other stuff in object passed in, in this case props
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <>
                <JournalHeader />
                <Component {...props} />
            </>
        ) : (
            <Redirect to="/" />
        )
    )} />
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);