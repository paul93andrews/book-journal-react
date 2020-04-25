import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { hideSearchErrorModal } from '../actions/displayChanges';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageOverlay = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ErrorModal = styled.div`
    max-width: 300px;
    padding: 30px;
    background: white;
    border: 1px solid whitesmoke;
    border-radius: 6px;
    box-shadow: 0 10px 50px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 860px) {
        max-width: unset;
    }
    button {
        align-self: flex-end;
        background: transparent;
        border: none;
        span {
            font-size: .01px;
        }
        &:hover {
            cursor: pointer;
            .fa-times {
                color: #f8598b;
            }
        }
    }
    h3 {
        font-family: 'Prompt', sans-serif;
        text-transform: uppercase;
        color: black;
        font-weight: 600;
        font-size: 2rem;
        margin: 15px 0;
    }
    h5 {
        font-size: 1rem;
        margin-top: 15px;
        color: #5d6f83;
        text-align: center;
        @media (min-width: 860px) {
            text-align: unset;
        }
    }
`

const SearchErrorModal = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(hideSearchErrorModal('hidden'));
    }

    return (
        <PageOverlay>
            <ErrorModal>
                <button onClick={closeModal} >
                    <span>Close Modal</span>
                    <FontAwesomeIcon icon="times" size="3x" />
                </button>
                <h3>Oops !</h3>
                <h5>Something went wrong...Please go back and try another search</h5>
            </ErrorModal>
        </PageOverlay>
    )
}

export default SearchErrorModal;