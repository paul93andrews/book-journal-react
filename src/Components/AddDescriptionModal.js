import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { hideDescriptionModal } from '../actions/displayChanges';
import { removeLatestBook } from '../actions/bookCatalogue';
import { addDescription } from '../actions/bookCatalogue';
import { displaySelectedBook } from '../actions/displayChanges';
import { trackCurrentPage } from '../actions/displayChanges';

import { stat } from 'fs';

const Wrapper = styled.section`
    
`

const AddDescriptionModal = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    useEffect(() => {
        dispatch(trackCurrentPage('searchPage'));
    }, [])

    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);
    const selectedBookID = useSelector(state => state.displayChanges[0].bookID);
    const pageType = useSelector(state => state.displayChanges[0].pageType);

    const book = useSelector(state => {
        if (state.bookCatalogue.length > 0) {
            return state.bookCatalogue.filter(book => {
                if (book.id === selectedBookID) {
                    return book
                }
            });
        }
        return [];
    });

    const changeDescription = (e) => {
        setValue(e.target.value);
    }

    const submitDescription = (e) => {
        e.preventDefault();
        dispatch(addDescription(value));
        setValue('');
        dispatch(hideDescriptionModal('hidden'));
    }

    const hideModal = () => {
        dispatch(hideDescriptionModal('hidden'));
        dispatch(displaySelectedBook(''));
        if (pageType === 'searchPage') {
            dispatch(removeLatestBook());
        }
    }

    return (
        <div>
            {
            modalDisplay === 'show' 
            ? 
            <Wrapper>
                <h3>{book.length > 0 ? book[0].title : ''}</h3>
                <form action="" onSubmit={submitDescription}>
                    <textarea name="" id="" value={value} onChange={changeDescription}></textarea>
                    <button>Add Description</button>
                </form>
                <button onClick={hideModal}>Cancel</button>
            </Wrapper>
            :
            null
            }
        </div>
    )
}

export default AddDescriptionModal;