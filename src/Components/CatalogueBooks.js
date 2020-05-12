import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Book from './Book';

const CatalogueBooks = () => {
    const bookList = useSelector(state => state.bookCatalogue);
    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);

    const determineOverlayBlurClass = () => {
        if (modalDisplay === 'show') {
            return 'blurComponent';
        } else {
            return '';
        }
    }

    return (
        <Catalogue className={determineOverlayBlurClass()}>
            {
            bookList.length === 0
            ?
            <h3 className="catalogue-intro-message">Start adding some books!</h3>
            :
            bookList.map(book => {
                return <Book {...book} key={book.id}/>
            })
            }
        </Catalogue>
    )
}


const Catalogue = styled.main`
    width: 540px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    height: 80vh;
    scrollbar-color: #5d6f83 transparent;  /* Firefox */
    &::-webkit-scrollbar { 
        background: transparent;  /* Safari and Chrome */
    }
    @media (max-width: 860px) {
        min-height: 20vh;
        height: 100vh;
        margin-bottom: 50px;
    }
    @media (max-width: 560px) {
        width: 95%;
    }
    .catalogue-intro-message {
        font-size: 1.5rem;
        margin: auto;
    }
`

export default CatalogueBooks;