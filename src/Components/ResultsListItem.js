import React from 'react';
import { useDispatch } from 'react-redux';

import { addBook } from '../actions/bookCatalogue';

const ResultListItem = ({ id, best_book, original_publication_year }) => {  
    const dispatch = useDispatch();

    const openModal = () => {
        console.log('opened and sent data to store in state');
        dispatch(addBook({
            id: id.$t,
            title: best_book.title,
            author: best_book.author,
            year: original_publication_year.$t,
            image: best_book.image_url,
        }));
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