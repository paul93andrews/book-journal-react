import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { hideDescriptionModal } from '../actions/displayChanges';
import { startAddDescription } from '../actions/bookCatalogue';
import { startRemoveSelectedBook } from '../actions/bookCatalogue';
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
        console.log('this was mounted');
    }, [])

    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);
    const pageType = useSelector(state => state.displayChanges[0].pageType);
    const bookCatalogueLength = useSelector(state => state.bookCatalogue.length)
    const book = useSelector(state => state.bookCatalogue[bookCatalogueLength - 1]);
    const selectedBookID = useSelector(state => state.displayChanges[0].bookID);
    

    const changeDescription = (e) => {
        setValue(e.target.value);
    }

    const submitDescription = (e) => {
        e.preventDefault();
        setValue('');
        dispatch(hideDescriptionModal('hidden'));

        if (pageType === 'searchPage') {
            dispatch(startAddDescription(book.id, value))
        } else if (pageType === 'cataloguePage') {
            dispatch(startAddDescription(selectedBookID, value))
        }
    }

    const hideModal = () => {
        dispatch(hideDescriptionModal('hidden'));
        dispatch(displaySelectedBook(''));

        if (pageType === 'searchPage') {
            dispatch(startRemoveSelectedBook(book.id))
        }
    }

    return (
        <div>
            {
            modalDisplay === 'show' 
            ? 
            <Wrapper>
                <h3>{book.title}</h3>
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