import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { startAddBook } from '../actions/bookCatalogue';
import { displayDescriptionModal } from '../actions/displayChanges';
import { displaySelectedBook } from '../actions/displayChanges';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
        <ListItem id={id.$t}>
            <div className="img">
                <img src={best_book.image_url} alt=""/>
            </div>
            <div className="description">
                <p><span className="category">Title:</span> {best_book.title}</p>
                <p><span className="category">Author:</span> {best_book.author.name}</p>
                <p><span className="category">Year:</span> {original_publication_year.$t}</p>
                <button onClick={openModal}>Add <FontAwesomeIcon icon="plus"></FontAwesomeIcon></button>
            </div>
        </ListItem>
    )
}

const ListItem = styled.article`
    display: flex;
    flex-wrap: wrap;
    min-width: 460px;
    height: 200px;
    margin-bottom: 15px;
    background: white;
    border-radius: 6px;
    transition: box-shadow .2s ease,transform .2s ease,-webkit-transform .2s ease;
    &:hover,
    &:active {
        transform: translateY(-8px);
        box-shadow: 0 10px 50px rgba(0,0,0,.1);
    }
    @media (max-width: 575px) {
        width: 90%;
        margin: 0 auto 20px;
        min-width: unset;
    }
    .img {
        width: 20%;
        @media (max-width: 575px) {
            width: 15%;
            overflow: hidden;
        }
        img {
            height: 100%;
            max-width: 113px;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }
    .description {
        width: calc(80% - 20px);
        max-height: 100%;
        padding-left: 20px;
        font-family: 'Prompt', sans-serif;
        font-weight: 600;
        color: #5d6f83;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        @media (max-width: 575px) {
            width: calc(85% - 5px);
            padding-left: 5px;
        }
        p {
            margin-bottom: 0;
            &:first-of-type {
                overflow: hidden;
            }
        }
        .category {
            text-transform: uppercase;
            font-size: 14px;
            color: #f8598b;
        }
        button {
            border-radius: 6px;
            font-family: 'Prompt', sans-serif;
            text-transform: uppercase;
            color: white;
            font-weight: 600;
            background: #f8598b;
            box-shadow: none;
            border: 1px solid transparent;
            transition: box-shadow .2s ease,transform .2s ease, color .2s ease, -webkit-transform .2s ease;
            margin-left: 5px;
            padding: 10px 20px;
            align-self: flex-end;
            margin-right: 15px;
            margin-bottom: 20px;
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

export default ResultListItem;