import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainAside = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0 5px;
    min-height: 40vh;
    @media (min-width: 860px) {
        width: 63%;
        padding: 0;
        justify-content: flex-end;
    }
    p {
        margin-top: 50px;
        color: #496274;
        font-family: 'Prompt', sans-serif;
        @media (min-width: 860px) {
            width: 100%;
            height: 45%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }
    }
`;

const MainAsideSection = () => (
    <MainAside>
        <FontAwesomeIcon icon="book-reader" size="8x" color="#f8598b" />
        <p>Coded with Love by: Paul Andrews :)</p>
    </MainAside>
);

export default MainAsideSection;