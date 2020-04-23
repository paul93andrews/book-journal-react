import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { startLoginGuest } from '../actions/auth';

import LoginPageAside from './LoginPageAside';

const MainSection = styled.section`
    @media (min-width: 860px) {
        display: flex;
    }
`

const LoginSection = styled.section`
    width: 37%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    @media (max-width: 860px) {
        width: 100%;
        height: auto;
        padding-bottom: 30px;
    }
    div {
        padding: 0 15px;
        margin-bottom: 20px;
    }
    h1,
    h3 {
        text-align: center;
        font-weight: 300;

    }
    h1 {
        font-size: 2.5rem;
        line-height: 60px;
    }
    h3 {
        font-family: 'Prompt', sans-serif;
        font-size: 1rem;
        line-height: 22px;
        color: #496274;
    }
`

const LoginButton = styled.button`
    width: 175px;
    padding: 15px 0;
    margin-bottom: 15px;
    border-radius: 6px;
    font-family: 'Prompt', sans-serif;
    text-transform: uppercase;
    color: black;
    font-weight: 600;
    background: #eeeeef;
    box-shadow: none;
    border: none;
    transition: box-shadow .2s ease,transform .2s ease, color .2s ease, -webkit-transform .2s ease;
    &:hover {
        box-shadow: 0 2.5px 10px rgba(0,0,0,.1);
        transform: translateY(-8px);
        color: #f8598b;
    }
`

const LoginPage = ({ startLogin, startLoginGuest })  => (
    <MainSection>
        <LoginSection>
            <div>
                <h1>Paul's Book Catalogue React Project</h1>
                <h3>I've created this project to practice several skills related to programming in React. Everything from database storage and authentication, Redux, Hooks, Snapshot & Unit Testing, and Styled Components are used within this project. Continue as a guest to explore or login with a Gmail account for page load persistence experience.</h3>
            </div>
            <LoginButton onClick={startLogin}>Login Here</LoginButton>
            <LoginButton onClick={startLoginGuest}>Guest?</LoginButton>
        </LoginSection> 
        <LoginPageAside />
    </MainSection>
)

// export default LoginPage;

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startLoginGuest: () => dispatch(startLoginGuest()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);