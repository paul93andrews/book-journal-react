import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { displaySearchErrorModal, hideSearchErrorModal } from '../actions/displayChanges';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageOverlay = styled.section`
    position: absolute;
    width: 100%;
    height: 100vh;
`

const SearchErrorModal = () => {
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(hideSearchErrorModal('hidden'));
    }

    return (
        <PageOverlay>
            <div>
                <h3>Error!</h3>
                <h5>Something went wrong...Please go back and try another search</h5>
                <button onClick={closeModal} >
                    <FontAwesomeIcon icon="times" size="3x" />
                </button>
            </div>
        </PageOverlay>
    )
}

export default SearchErrorModal;