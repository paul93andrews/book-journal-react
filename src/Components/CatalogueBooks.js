import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Book from './Book';

const CatalogueBooks = () => {
    const bookList = useSelector(state => state.bookCatalogue);

    return (
        <Catalogue>
            {/* Need to map over state results to display each individual book component  */}
            {
            bookList.length === 0
            ?
            <h3>Start adding some books!</h3>
            :
            bookList.map(book => {
                //look up why spreading book object into props works for destructuring
                return <Book {...book} key={book.id}/>
            })
            }
        </Catalogue>
    )
}


const Catalogue = styled.main`
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 80vh;
    overflow-y: scroll;
    scrollbar-color: #5d6f83 transparent;  /* Firefox */

    &::-webkit-scrollbar { 
        background: transparent;  /* Safari and Chrome */
`

export default CatalogueBooks;