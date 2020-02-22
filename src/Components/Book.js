import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { removeSelectedBook } from '../actions/bookCatalogue';
import { displayDescriptionModal } from '../actions/displayChanges';
import { displaySelectedBook } from '../actions/displayChanges';

import styled from 'styled-components';

const BookItem = styled.article`

`

const Book = ({ id, image, title, author, year, description }) => {
    const dispatch = useDispatch();

    const removeBook = () => {
        dispatch(removeSelectedBook(id));
    }

    const openModal = () => {
        dispatch((displaySelectedBook(id)));
        dispatch(displayDescriptionModal('show'));
    }

    return (
        <BookItem>
            <img src={image} alt=""/>
            <h4>{title}</h4>
            <h5>{author.name}</h5>
            <p>{year}</p>
            <p>{description}</p>
            <button onClick={openModal}>Edit Book</button>
            <button onClick={removeBook}>Remove Book</button>
        </BookItem>
    )
}

export default Book;