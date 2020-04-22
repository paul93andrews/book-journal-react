import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { startLoginGuest } from '../actions/auth';

const LoginSection = styled.section`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    h1,
    h3 {
        text-align: center;
    }
` 

const LoginPage = ({ startLogin, startLoginGuest })  => (
    <LoginSection>
        <div>
            <h1>Paul's Book Catalogue React Project</h1>
            <h3>I've created this project to practice several skills related to programming in React. Everything from database storage and authentication, Redux, Hooks, Snapshot & Unit Testing, and Styled Components are used within this project. Continue as a guest to explore or login with a Gmail account for the persisent across page load experience.</h3>
        </div>
        <button onClick={startLogin}>Login Here</button>
        <button onClick={startLoginGuest}>Guest?</button>
    </LoginSection> 
)

// export default LoginPage;

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGuest: () => dispatch(startLoginGuest()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);