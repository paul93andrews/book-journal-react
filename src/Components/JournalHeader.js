import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const JournalHeader = ({ startLogout, displayChanges }) => {

    const searchErrorModalState = displayChanges[0].searchErrorModal;
    const descriptionModalState = displayChanges[0].descriptionModal;

    const determineOverlayBlurClass = (searchErrorModal, descriptionModal) => {
        if (searchErrorModal === 'display' || descriptionModal === 'show') {
            return 'blurComponent';
        } else {
            return '';
        }
    } 

    return (
        <Header className={
        determineOverlayBlurClass(searchErrorModalState, descriptionModalState)
        }
        >
            <h1>Paul's Book Catalogue React Project</h1>
            <NavLink to="/home" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/search" activeClassName="is-active">Search</NavLink>
            <NavLink to="/catalogue" activeClassName="is-active">Catalogue</NavLink>
            <LogoutButton onClick={startLogout}>Log Out</LogoutButton>
        </Header>
    ) 
}

const Header = styled.header`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 860px) {
        width: 37%;
        height: 100vh;
        padding: 0 15px;
    }
    h1 {
        text-align: center;
        font-weight: 300;
        font-size: 1.75rem;
        line-height: 30px;
        margin-top: 45px;
        @media (min-width: 860px) {
            font-size: 2.5rem;
            line-height: 60px;
            margin-top: 0;
        }
    }
    a {
        font-family: 'Prompt', sans-serif;
        text-decoration: none;
        color: #5d6f83;
        padding: 7.5px 0;
        position: relative;
        @media (min-width: 860px) {
            font-size: 1.5rem;
        }
        &.is-active,
        &:hover {
            color: #f8598b;
        }
        &:nth-of-type(2) {
            text-align: center;
            &::after,
            &::before {
                content: '';
                display: block;
                height: 1px;
                background-color: #5d6f83;
                position: relative;
                width: 100px;
                @media (min-width: 860px) {
                    width: 180px;
                }
            }
            &::before {
                top: -5px;
            }
            &::after {
                bottom: -7px;
            }
        }
    }
`

const LogoutButton = styled.button`
    width: 140px;
    padding: 15px 0;
    margin: 25px 0 45px;
    border-radius: 6px;
    font-family: 'Prompt', sans-serif;
    text-transform: uppercase;
    color: black;
    font-weight: 600;
    background: #eeeeef;
    box-shadow: none;
    border: none;
    transition: box-shadow .2s ease,transform .2s ease, color .2s ease, -webkit-transform .2s ease;
    @media (min-width: 860px) {
        width: 175px;
        margin-bottom: 15px;
    }
    &:hover {
        box-shadow: 0 2.5px 10px rgba(0,0,0,.1);
        transform: translateY(-8px);
        color: #f8598b;
        cursor: pointer;
    }
`

const mapStateToProps = state => ({
    displayChanges: state.displayChanges,
})

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(JournalHeader);