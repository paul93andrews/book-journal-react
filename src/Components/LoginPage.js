import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { startLoginGuest } from '../actions/auth';

const LoginPage = ({ startLogin, startLoginGuest })  => (
    <div>
        <button onClick={startLogin}>Login Here</button>
        <button onClick={startLoginGuest}>Guest?</button>
    </div> 
)

// export default LoginPage;

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGuest: () => dispatch(startLoginGuest()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);