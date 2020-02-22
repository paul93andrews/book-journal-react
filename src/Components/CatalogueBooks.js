import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import Book from './Book';

const Catalogue = styled.main`

`

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

export default CatalogueBooks;