import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import DescriptionLengthTracker from './DescriptionLengthTracker';
import { hideDescriptionModal } from '../actions/displayChanges';
import { startAddDescription } from '../actions/bookCatalogue';
import { startRemoveSelectedBook } from '../actions/bookCatalogue';
import { displaySelectedBook } from '../actions/displayChanges';
import { trackCurrentPage } from '../actions/displayChanges';
import { updatingDescriptionValue, resetDescriptionValue } from '../actions/displayChanges';

import { stat } from 'fs';

const AddDescriptionModal = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');
    useEffect(() => {
        dispatch(trackCurrentPage('searchPage'));
    }, [])

    const modalDisplay = useSelector(state => state.displayChanges[0].descriptionModal);
    const pageType = useSelector(state => state.displayChanges[0].pageType);
    const selectedBook = useSelector(state => state.displayChanges[0].bookDetails);
    const descriptionValueUpdating = useSelector(state => state.displayChanges[0].descriptionValueUpdating);
    const bookCatalogueLength = useSelector(state => state.bookCatalogue.length)
    const book = useSelector(state => state.bookCatalogue[bookCatalogueLength - 1]);

    const selectedBookID = selectedBook.id;
    const selectedBookTitle = selectedBook.title;
    const selectedBookAuthor = selectedBook.author;
    const selectedBookYear = selectedBook.year;
    const selectedBookDescription = selectedBook.description;
    
    const descriptionValue = descriptionValueUpdating ? value : selectedBookDescription + value;

    const changeDescription = (e) => {
        if (e.target.value.length <= 105) {
            dispatch(updatingDescriptionValue());
            setValue(e.target.value);
        } else if (e.target.value.length >= 105) {
            return null;
        }
    }

    const submitDescription = (e) => {
        e.preventDefault();
        setValue('');

        dispatch(resetDescriptionValue());
        dispatch(hideDescriptionModal('hidden'));

        if (pageType === 'searchPage') {
            dispatch(startAddDescription(book.id, value))
        } else if (pageType === 'cataloguePage') {
            dispatch(startAddDescription(selectedBookID, value))
        }
    }

    const hideModal = () => {
        setValue('');

        dispatch(resetDescriptionValue());
        dispatch(hideDescriptionModal('hidden'));
        dispatch(displaySelectedBook(''));

        if (pageType === 'searchPage') {
            dispatch(startRemoveSelectedBook(book.id))
        }
    }
    
    const overlayClass = () => {
        if (modalDisplay === 'show') {
            return 'overlay'
        } else {
            return ''
        }
    }

    const buttonLabel = pageType === 'searchPage' ? 'Add Book' : 'Update Book';

    return (
        <DescriptionOverlay className={overlayClass()}>
            {
            modalDisplay === 'show' 
            ? 
            <DescriptionModal>
                <button onClick={hideModal} className="hide-modal-button">
                    <span>Close Modal</span>
                    <FontAwesomeIcon icon="times" size="3x" />
                </button>
                <h3>{selectedBookTitle}</h3>
                <h4>
                    <span className="category">Author: </span>{selectedBookAuthor}
                </h4>
                <h4>
                    <span className="category">Year: </span>
                    {selectedBookYear}
                </h4>
                <form action="" onSubmit={submitDescription}>
                    <textarea 
                    name="" 
                    id="" 
                    value={descriptionValue} 
                    onChange={changeDescription}
                    placeholder="Enter a description here if you'd like!"
                    ></textarea>
                            <DescriptionLengthTracker descriptionLength={descriptionValue.length}  />
                    <button>
                        {buttonLabel}
                        <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
                    </button>
                </form>
            </DescriptionModal>
            :
            null
            }
        </DescriptionOverlay>
    )
}

const DescriptionOverlay = styled.aside`
    &.overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`

const DescriptionModal = styled.section`
    width: 550px;
    padding: 30px;
    background: white;
    border: 1px solid whitesmoke;
    border-radius: 6px;
    box-shadow: 0 10px 50px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    @media (max-width: 625px) {
        min-width: 300px;
        max-width: 400px;
    }
    @media (max-width: 450px) {
        width: 90%;
    }
    .hide-modal-button {
        background: transparent;
        border: none;
        align-self: flex-end;
        span {
            font-size: 0.1rem;
            color: white;
        }
        &:hover {
            cursor: pointer;
            .fa-times {
                color: #f8598b;
            }
        }
    }
    h3 {
        font-family: 'Prompt', sans-serif;
        color: black;
        font-weight: 600;
        font-size: 1.5rem;
        margin: 15px 0;
        margin-bottom: 0;
        text-align: center;
        @media (max-width: 560px) {
            font-size: 1.15rem;
        }
    }
    h4 {
        margin-bottom: 0;
        font-size: 1rem;
        font-family: 'Prompt', sans-serif;
        font-weight: 300;
        &:first-of-type {
            margin-bottom: 5px;
        }
        &:nth-of-type(2) {
            margin-top: 0;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        textarea {
            resize: none;
            width: 100%;
            max-width: 100%;
            height: 150px;
            border: 2px solid #f8598b;
            border-radius: 6px;
            font-family: 'Prompt', sans-serif;
            padding: 10px 15px;
            margin-top: 25px;
        }
        button {
            align-self: center;
            border-radius: 6px;
            font-family: 'Prompt', sans-serif;
            text-transform: uppercase;
            color: white;
            font-weight: 600;
            background: #f8598b;
            box-shadow: none;
            border: 1px solid transparent;
            transition: box-shadow .2s ease,transform .2s ease, color .2s ease, -webkit-transform .2s ease;
            padding: 10px 20px;
            margin-top: 30px;
            .fa-plus {
                margin-left: 5px;
            }
            &:hover,
            &:active {
                cursor: pointer;
                box-shadow: 0 5px 25px rgba(0,0,0,.1);
            }
            @media (min-width: 860px) {
                padding: 10px 20px;
            }
        }
    }
`

export default AddDescriptionModal;