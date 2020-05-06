import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trackCurrentPage } from '../actions/displayChanges';

const JournalHome = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(trackCurrentPage('homePage'));
    }, [])

    return (
        <JournalMain>
            <div>
                <FontAwesomeIcon icon="book-reader" size="8x" color="#f8598b" />
                <p>Welcome to my project! Take a look around each of the pages if you have a second. Go look for some books on our search page or keep tabs on ones you've read recently on our catalogue page. Have fun.</p>
            </div>
            <p className="creator-stamp">{`Coded with Love by: Paul Andrews :)`}</p>
        </JournalMain>
    )
}

const JournalMain = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    @media (min-width: 860px) {
        width: 63%;
        height: 100vh;
        justify-content: flex-end;
        align-items: flex-end;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 55px;
        @media (min-width: 860px) {
            padding-top: 0;
        }
    }
    p {
        width: 75%;
        text-align: center;
        font-family: 'Prompt', sans-serif;
        font-size: 1rem;
        margin-top: 40px;
    }
    .creator-stamp {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-top: 55px;
        margin-bottom: .5rem;
        @media (min-width: 860px) {
            height: 28%;
            margin-top: 40px;
            margin-bottom: 1rem;
        }
    }
`

export default JournalHome;