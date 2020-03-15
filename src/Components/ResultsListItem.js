import React from 'react';
import { useDispatch } from 'react-redux';

import { startAddBook } from '../actions/bookCatalogue';
import { displayDescriptionModal } from '../actions/displayChanges';
import { displaySelectedBook } from '../actions/displayChanges';

const ResultListItem = ({ id, best_book, original_publication_year }) => {  
    const dispatch = useDispatch();

    const openModal = () => {
        const modifiedYear = original_publication_year["$t"];
        dispatch(startAddBook({
            title: best_book.title,
            author: best_book.author.name,
            year: modifiedYear,
            image: best_book.image_url,
        }));
        dispatch((displaySelectedBook(id.$t)));
        dispatch(displayDescriptionModal('show'));
    }
    
    return (
        <div id={id.$t}>
            <p>Title: {best_book.title}</p>
            <p>Author: {best_book.author.name}</p>
            <p>Year: {original_publication_year.$t}</p>
            <button onClick={openModal}>Click to Open Modal</button>
        </div>
    )
}

export default ResultListItem;